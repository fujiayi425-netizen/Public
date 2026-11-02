import { Camera } from 'lucide-react'
import SceneLayout from '../components/SceneLayout'
import { CarouselArt } from '../components/SceneArt'
import PhotoPlaceholder from '../components/PhotoPlaceholder'
import { photoData } from '../data/photoData'

export default function MemoriesScene() {
  return <SceneLayout number="03" eyebrow="OUR LITTLE MEMORIES"
    title={<>时光转呀转，<br />身边<span className="title-accent">一直是你。</span></>}
    description={<><p>有些瞬间，值得被温柔地定格。</p><p>等旋转木马再次亮起，<br />我们就回到那些舍不得忘记的日子。</p></>}
    detail={<div className="small-note"><Camera size={19} strokeWidth={1} /><div><span className="micro-label">12 LITTLE MOMENTS</span><p>预留 12 张照片，等你放进我们的故事。</p></div></div>}>
    <div className="memories-art"><CarouselArt className="scene-art carousel-art" />{photoData.slice(0, 2).map((photo, index) => <PhotoPlaceholder key={photo.id} src={photo.src} alt={photo.alt} label={photo.title} number={`${String(index + 1).padStart(2, '0')} / ${photoData.length}`} className={`memory-photo memory-photo-${index === 0 ? 'one' : 'two'}`} />)}<span className="stage-handwriting">our favorite little moments</span></div>
  </SceneLayout>
}
