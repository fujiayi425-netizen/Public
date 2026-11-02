import { ArrowUpRight, Sparkles } from 'lucide-react'
import SceneLayout from '../components/SceneLayout'
import PlanetArt from '../components/PlanetArt'
import { siteData } from '../data/siteData'

export default function WelcomeScene({ onNext }: { onNext: () => void }) {
  const [firstLine, ...remainingLines] = siteData.welcome.title.split('\n')
  return <SceneLayout number="01" eyebrow={siteData.welcome.eyebrow} variant="welcome-scene"
    title={<>{firstLine}<br /><span className="title-accent">{remainingLines.join('\n')}</span></>}
    description={<><p className="preserve-lines">{siteData.welcome.description}</p><p className="english-aside">{siteData.welcome.english}</p></>}
    detail={<><button className="primary-button" onClick={onNext}>翻开我们的故事 <ArrowUpRight size={17} strokeWidth={1.5} /></button><div className="welcome-footnote"><Sparkles size={14} strokeWidth={1.2} /><span>{siteData.welcome.footnote}</span></div></>}>
    <PlanetArt />
    <div className="anniversary-stamp"><span>2000</span><small>DAYS OF US</small><i>and counting</i></div>
  </SceneLayout>
}
