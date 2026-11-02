import { Gift } from 'lucide-react'
import SceneLayout from '../components/SceneLayout'
import { GashaponArt } from '../components/SceneArt'
import { gashaponData } from '../data/gashaponData'

export default function GashaponScene() {
  const categories = [...new Set(gashaponData.filter(prize => prize.category !== 'ssr').map(prize => prize.label))]
  return <SceneLayout number="06" eyebrow="A LITTLE SURPRISE FOR YOU"
    title={<>生活要有惊喜，<br />比如<span className="title-accent">我和你。</span></>}
    description={<><p>把小小的心动，装进一颗扭蛋。</p><p>有夸奖，有回忆，也有尚未兑现的约定。<br />下一份幸运，会是什么呢？</p></>}
    detail={<><div className="capsule-categories">{categories.map(category => <span key={category}>{category}</span>)}</div><div className="small-note special-note"><Gift size={17} strokeWidth={1} /><p>还有一份 SSR 级别的心意，藏在里面。</p></div></>}>
    <div className="art-stage gashapon-stage"><div className="art-halo" /><GashaponArt className="scene-art" /><span className="stage-handwriting">a pocket full of little surprises</span></div>
  </SceneLayout>
}
