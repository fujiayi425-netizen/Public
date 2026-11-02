import { Moon, Sparkle } from 'lucide-react'
import SceneLayout from '../components/SceneLayout'
import { starMessages } from '../data/starMessages'

const positions = [[13, 28], [27, 47], [35, 24], [48, 17], [65, 28], [80, 19], [88, 44], [74, 64], [53, 77], [29, 75], [12, 61], [88, 80]]

export default function StarsScene() {
  return <SceneLayout number="04" eyebrow="STARS KNOW I LOVE YOU" variant="stars-scene"
    title={<>有些悄悄话，<br />想<span className="title-accent">说给星星听。</span></>}
    description={<><p>如果每一份想念都能变成星星，<br />此刻，你一定拥有整片夜空。</p><p className="english-aside">Every star has something to tell you.</p></>}
    detail={<div className="small-note"><Sparkle size={20} strokeWidth={1} /><div><span className="micro-label">12 STARS · 12 LITTLE SECRETS</span><p>星光替我收藏，那些没说完的喜欢。</p></div></div>}>
    <div className="constellation-art"><Moon className="constellation-moon" size={40} strokeWidth={.7} /><div className="night-nebula" /><svg viewBox="0 0 100 100" preserveAspectRatio="none" className="constellation-lines" aria-hidden="true"><path d="M27 47 35 24 48 17 65 28 74 64 53 77 29 75 27 47" fill="none" stroke="currentColor" strokeWidth=".2" strokeDasharray="1 2" /></svg>{positions.map(([x, y], i) => <span className={`constellation-star star-${i}`} key={i} style={{ left: `${x}%`, top: `${y}%` }} aria-hidden="true">✦</span>)}<div className="star-quote"><span className="micro-label">A WHISPER FROM THE STARS</span><p>「{starMessages[0]?.text ?? '留一句想说给你听的话。'}」</p><span className="star-quote-line" /></div><div className="constellation-label">THE SKY IS FULL OF YOU</div></div>
  </SceneLayout>
}
