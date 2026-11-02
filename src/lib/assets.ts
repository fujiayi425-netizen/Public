// Discover only files that actually exist. Missing personal photos should render
// a placeholder instead of making a request that fails with a 404.
const publicImages = import.meta.glob<string>(
  '/public/images/*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG,WEBP,AVIF}',
  { eager: true, query: '?url', import: 'default' },
)

export function publicImageExists(path: string | undefined): boolean {
  return Boolean(path && Object.hasOwn(publicImages, `/public${path}`))
}

export function publicImageUrl(path: string | undefined): string | undefined {
  if (!path || !publicImageExists(path)) return undefined
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`
}
