import { Feather } from 'lucide-react'
import SceneLayout from '../components/SceneLayout'
import { BalloonArt } from '../components/SceneArt'
import { balloonColors } from '../data/balloonData'

export default function WishesScene() {
  return <SceneLayout number="05" eyebrow="SEND OUR WISHES TO THE STARS"
    title={<>把愿望交给天空，<br />把<span className="title-accent">未来交给你。</span></>}
    description={<><p>一起去还没去过的地方，<br />一起把普通的明天，过成喜欢的模样。</p><p className="english-aside">A little wish, for a long, long future.</p></>}
    detail={<div className="wish-palette"><span className="micro-label">COLORS OF OUR TOMORROW</span><div className="palette-row">{balloonColors.map(color => <i key={color.id} style={{ background: color.value }} title={color.name} aria-label={color.name} />)}<Feather size={17} strokeWidth={1} /></div><p>五种温柔的颜色，装下关于未来的想象。</p></div>}>
    <div className="art-stage balloon-stage"><div className="art-halo" /><div className="soft-cloud cloud-one" /><div className="soft-cloud cloud-two" /><BalloonArt className="scene-art floating-art" /><span className="stage-handwriting">make a wish, my love.</span></div>
  </SceneLayout>
}
