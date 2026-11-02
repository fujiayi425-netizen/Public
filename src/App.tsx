import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, MotionConfig, useReducedMotion } from 'framer-motion'
import { ArrowDownLeft, ArrowLeft, ArrowRight, BookOpen, RotateCcw, Sparkles, X } from 'lucide-react'
import StarBackground from './components/StarBackground'
import SceneNavigation from './components/SceneNavigation'
import WelcomeScene from './scenes/WelcomeScene'
import InvitationScene from './scenes/InvitationScene'
import MemoriesScene from './scenes/MemoriesScene'
import StarsScene from './scenes/StarsScene'
import WishesScene from './scenes/WishesScene'
import GashaponScene from './scenes/GashaponScene'
import LetterScene from './scenes/LetterScene'
import FinalScene from './scenes/FinalScene'
import { sceneLabels, siteData } from './data/siteData'

function sceneFromHash() {
  const index = sceneLabels.findIndex(scene => `#${scene.id}` === window.location.hash)
  return index < 0 ? 0 : index
}

export default function App() {
  const [current, setCurrent] = useState(sceneFromHash)
  const [visited, setVisited] = useState(() => new Set([sceneFromHash()]))
  const dialogRef = useRef<HTMLDialogElement>(null)
  const sceneRef = useRef<HTMLDivElement>(null)
  const firstRender = useRef(true)
  const reduceMotion = useReducedMotion()

  const selectScene = (index: number) => {
    if (index < 0 || index >= sceneLabels.length) return
    setCurrent(index)
    setVisited(previous => new Set([...previous, index]))
    window.history.replaceState(null, '', `#${sceneLabels[index].id}`)
    dialogRef.current?.close()
  }

  useEffect(() => {
    const onHashChange = () => {
      const index = sceneFromHash()
      setCurrent(index)
      setVisited(previous => new Set([...previous, index]))
    }
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  useEffect(() => {
    if (firstRender.current) { firstRender.current = false; return }
    sceneRef.current?.focus({ preventScroll: true })
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [current])

  const scenes = [<WelcomeScene onNext={() => selectScene(1)} />, <InvitationScene />, <MemoriesScene />, <StarsScene />, <WishesScene />, <GashaponScene />, <LetterScene />, <FinalScene />]
  const number = String(current + 1).padStart(2, '0')

  return <MotionConfig reducedMotion="user">
    <a className="skip-link" href="#story-content" onClick={event => { event.preventDefault(); sceneRef.current?.focus(); sceneRef.current?.scrollIntoView({ block: 'start' }) }}>跳至故事内容</a>
    <div className={`universe-app ${current === 3 ? 'night-scene' : ''}`}>
      <StarBackground />
      <div className="page-shell">
        <header className="site-header">
          <button type="button" className="brand" onClick={() => selectScene(0)} aria-label="2000 DAYS 星球来信，回到序章">
            <svg className="brand-symbol" viewBox="0 0 44 44" fill="none" aria-hidden="true"><circle cx="22" cy="22" r="11" stroke="currentColor" strokeWidth=".9" /><ellipse cx="22" cy="23" rx="20" ry="6" transform="rotate(-30 22 23)" stroke="currentColor" strokeWidth=".9" /><path d="m34 4 1 3.6L39 9l-4 1-1 4-1-4-4-1 4-1.4Z" fill="currentColor" /></svg>
            <span className="brand-type"><span>{siteData.name}<i> / </i>{siteData.chineseName}</span><small>{siteData.subtitle}</small></span>
          </button>
          <div className="header-right"><span className="edition-badge"><i />视觉框架 · 第一期</span><span className="header-separator" /><button type="button" className="contents-button" onClick={() => dialogRef.current?.showModal()}><BookOpen size={16} strokeWidth={1.3} /><span>旅程目录</span></button></div>
        </header>

        <main id="story-content">
          <div className="chapter-topline"><span><span className="tiny-spark">✦</span> A LOVE LETTER IN THE STARS</span><span>CHAPTER <b>{number}</b><i>/</i>08</span></div>
          <div className="scene-container" ref={sceneRef} tabIndex={-1} aria-label={`第 ${current + 1} 章，${sceneLabels[current].name}`}>
            <AnimatePresence mode="wait" initial={false}>
              <motion.div key={current} className="scene-motion" initial={{ opacity: 0, y: reduceMotion ? 0 : 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: reduceMotion ? 0 : -8 }} transition={{ duration: reduceMotion ? 0 : .28, ease: 'easeOut' }}>
                {scenes[current]}
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="scene-bottomline"><div className="chapter-summary"><span className="chapter-summary-number">{number}</span><span className="chapter-summary-line" /><div><span className="chapter-summary-title">{sceneLabels[current].name}</span><span className="chapter-summary-description">{sceneLabels[current].description}</span></div></div><div className="scene-controls"><button type="button" className="previous-button" disabled={current === 0} onClick={() => selectScene(current - 1)} aria-label="上一章"><ArrowLeft size={17} strokeWidth={1.4} /></button><button type="button" className="next-button" onClick={() => selectScene(current === 7 ? 0 : current + 1)}><span>{current === 7 ? '回到故事的开始' : `下一站 · ${sceneLabels[current + 1].name}`}</span>{current === 7 ? <RotateCcw size={15} strokeWidth={1.3} /> : <ArrowRight size={17} strokeWidth={1.4} />}</button></div></div>
          <SceneNavigation current={current} visited={visited} onSelect={selectScene} />
        </main>

        <footer className="site-footer"><span>MADE OF 2000 DAYS & A LITTLE MAGIC</span><span>YOU & ME, ALWAYS. <span aria-hidden="true">♡</span></span></footer>
      </div>
      <dialog ref={dialogRef} className="contents-dialog" aria-labelledby="contents-title" onClick={event => { if (event.target === event.currentTarget) dialogRef.current?.close() }}>
        <div className="dialog-heading"><span className="micro-label">OUR LITTLE ITINERARY</span><button type="button" className="icon-button" onClick={() => dialogRef.current?.close()} aria-label="关闭目录"><X size={20} strokeWidth={1.3} /></button></div>
        <h2 id="contents-title">我们的星际旅程<span>✧</span></h2><p className="contents-intro">八个小小的章节，一份慢慢展开的心意。</p>
        <div className="contents-list">{sceneLabels.map((scene, index) => <button type="button" key={scene.id} onClick={() => selectScene(index)} aria-current={current === index ? 'step' : undefined}><span className="contents-number">{String(index + 1).padStart(2, '0')}</span><div><span>{scene.name}</span><small>{scene.englishName}</small></div><ArrowDownLeft size={17} strokeWidth={1} /></button>)}</div>
        <p className="contents-footnote"><Sparkles size={13} /> 当前为视觉框架，所有章节均可自由浏览。</p>
      </dialog>
    </div>
  </MotionConfig>
}
