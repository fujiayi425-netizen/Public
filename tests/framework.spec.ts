import { expect, test, type Page } from '@playwright/test'

const sceneIds = ['welcome', 'invitation', 'memories', 'stars', 'wishes', 'gashapon', 'letter', 'final']
const browserErrors = new WeakMap<Page, string[]>()

// Navigation must not hide failed resources or runtime errors behind a usable-looking screen.
test.beforeEach(async ({ page }) => {
  const errors: string[] = []
  browserErrors.set(page, errors)
  page.on('pageerror', error => errors.push(`Page error: ${error.message}`))
  page.on('console', message => {
    if (message.type() === 'error') errors.push(`Console error: ${message.text()}`)
  })
  page.on('response', response => {
    if (response.status() >= 400) errors.push(`HTTP ${response.status()}: ${response.url()}`)
  })
})

test.afterEach(async ({ page }) => {
  expect(browserErrors.get(page), 'No runtime errors or failed resources').toEqual([])
})

function chapterButtons(page: Page) {
  return page.getByRole('navigation', { name: '故事章节' }).getByRole('button')
}

async function expectScene(page: Page, index: number) {
  await expect(page).toHaveURL(new RegExp(`#${sceneIds[index]}$`))
  await expect(chapterButtons(page).nth(index)).toHaveAttribute('aria-current', 'step')
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible()
}

test('all eight chapters are reachable through the star navigation', async ({ page }) => {
  await page.goto('/')
  await expect(chapterButtons(page)).toHaveCount(8)
  for (let index = 0; index < sceneIds.length; index++) {
    await chapterButtons(page).nth(index).click()
    await expectScene(page, index)
  }
})

test('story controls move forward, back and return from the final chapter', async ({ page }) => {
  await page.goto('/#welcome')
  await expect(page.getByRole('button', { name: '上一章' })).toBeDisabled()
  await page.getByRole('button', { name: '翻开我们的故事' }).click()
  await expectScene(page, 1)
  await page.getByRole('button', { name: '上一章' }).click()
  await expectScene(page, 0)
  for (let index = 1; index < sceneIds.length; index++) {
    await page.getByRole('button', { name: /^下一站/ }).click()
    await expectScene(page, index)
  }
  await page.getByRole('button', { name: '回到故事的开始' }).click()
  await expectScene(page, 0)
  await expect(page.getByRole('button', { name: '上一章' })).toBeDisabled()
})

test('contents dialog supports keyboard dismissal and chapter selection', async ({ page }) => {
  await page.goto('/#welcome')
  const trigger = page.getByRole('button', { name: '旅程目录' })
  const dialog = page.getByRole('dialog')
  await trigger.focus()
  await page.keyboard.press('Enter')
  await expect(dialog).toBeVisible()
  await page.keyboard.press('Escape')
  await expect(dialog).not.toBeVisible()
  await expect(trigger).toBeFocused()

  await trigger.click()
  await dialog.getByRole('button', { name: '关闭目录' }).click()
  await expect(dialog).not.toBeVisible()

  await trigger.click()
  await dialog.getByRole('button', { name: /愿望放飞/ }).click()
  await expect(dialog).not.toBeVisible()
  await expectScene(page, 4)
})

test('a direct chapter URL survives reload and skip navigation preserves it', async ({ page }) => {
  await page.goto('/#final')
  await expectScene(page, 7)
  await page.reload()
  await expectScene(page, 7)
  const skipLink = page.getByRole('link', { name: '跳至故事内容' })
  await skipLink.focus()
  await page.keyboard.press('Enter')
  await expectScene(page, 7)
  await expect(page.locator('.scene-container')).toBeFocused()
})

for (const viewport of [
  { width: 320, height: 740 },
  { width: 390, height: 844 },
  { width: 768, height: 1024 },
  { width: 1440, height: 1000 },
]) {
  test(`all chapters fit a ${viewport.width} × ${viewport.height} viewport`, async ({ page }) => {
    await page.setViewportSize(viewport)
    await page.emulateMedia({ reducedMotion: 'reduce' })
    await page.goto('/')
    for (let index = 0; index < sceneIds.length; index++) {
      await chapterButtons(page).nth(index).click()
      await expectScene(page, index)
      await expect.poll(() => page.evaluate(() => Math.max(
        document.documentElement.scrollWidth,
        document.body.scrollWidth,
      ) - window.innerWidth), { message: `${sceneIds[index]} should not overflow horizontally` }).toBeLessThanOrEqual(1)
    }
  })
}

test('reduced motion stops continuous decorative animations', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' })
  await page.goto('/#welcome')
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible()
  await expect.poll(() => page.evaluate(() => document.getAnimations().filter(animation =>
    animation.playState === 'running' && Number(animation.effect?.getComputedTiming().duration) > 1,
  ).length)).toBe(0)
  await chapterButtons(page).nth(1).click()
  await expectScene(page, 1)
  await expect.poll(() => page.evaluate(() => document.getAnimations().filter(animation =>
    animation.playState === 'running' && Number(animation.effect?.getComputedTiming().duration) > 1,
  ).length)).toBe(0)
})
