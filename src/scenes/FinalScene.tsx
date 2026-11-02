import { Heart, Mic } from 'lucide-react'
import SceneLayout from '../components/SceneLayout'
import { GreetingArt } from '../components/SceneArt'
import { finalCardData } from '../data/finalCardData'
import PhotoPlaceholder from '../components/PhotoPlaceholder'

export default function FinalScene() {
  return <SceneLayout number="08" eyebrow="TO MY FAVORITE PERSON" variant="final-scene"
    title={<>第 2000 天，<br />以及<span className="title-accent">以后的每一天。</span></>}
    description={<><p className="preserve-lines">{finalCardData.finalChinese}</p><p className="english-aside">{finalCardData.tagline}</p></>}
    detail={<><div className="voice-preview"><span className="voice-preview-icon"><Mic size={17} strokeWidth={1.2} /></span><div><span className="micro-label">{finalCardData.voiceTitle}</span><p>{finalCardData.voiceDescription}</p><small>专属录音位置已预留 · 等待你的声音</small></div><div className="waveform" aria-hidden="true">{Array.from({ length: 12 }, (_, i) => <i key={i} style={{ height: 7 + (i * 11 % 23) }} />)}</div></div><div className="forever-note"><Heart size={12} strokeWidth={1.3} /><span>TO OUR NEXT 2000 DAYS</span></div></>}>
    <div className="art-stage greeting-stage"><div className="art-halo" /><GreetingArt className="scene-art floating-art" /><PhotoPlaceholder className="final-photo" src={finalCardData.photo} alt={finalCardData.photoAlt} label="这一刻，想一直珍藏。" /><span className="stage-handwriting">{finalCardData.finalEnglish}</span></div>
  </SceneLayout>
}
