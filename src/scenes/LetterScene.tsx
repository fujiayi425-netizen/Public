import { Flower2 } from 'lucide-react'
import SceneLayout from '../components/SceneLayout'
import { GardenArt } from '../components/SceneArt'
import { letterData } from '../data/letterData'

export default function LetterScene() {
  return <SceneLayout number="07" eyebrow="A LETTER JUST FOR YOU"
    title={<>字里花间，<br />每一句<span className="title-accent">都是你。</span></>}
    description={<><p>关于过去，关于现在，关于未来。</p><p className="preserve-lines">{letterData.preview}</p><p className="english-aside">Of all the stories, ours is my favorite.</p></>}
    detail={<div className="small-note"><Flower2 size={21} strokeWidth={1} /><div><span className="micro-label">SEALED WITH ALL MY LOVE</span><p>留一张空白信纸，写下你自己的心意。</p></div></div>}>
    <div className="art-stage garden-stage"><GardenArt className="scene-art" /><span className="letter-seal-caption">To you, with love.</span></div>
  </SceneLayout>
}
