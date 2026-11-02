import { ArrowDown, Ticket } from 'lucide-react'
import SceneLayout from '../components/SceneLayout'
import { EnvelopeArt } from '../components/SceneArt'
import { siteData } from '../data/siteData'

export default function InvitationScene() {
  const [firstLine, ...remainingLines] = siteData.invitation.title.split('\n')
  return <SceneLayout number="02" eyebrow="WELCOME TO OUR LITTLE UNIVERSE"
    title={<>{firstLine}<br /><span className="title-accent">{remainingLines.join('\n')}</span></>}
    description={<>{siteData.invitation.paragraphs.map((paragraph, index) => <p className="preserve-lines" key={index}>{paragraph}</p>)}</>}
    detail={<div className="small-note"><Ticket size={20} strokeWidth={1} /><div><span className="micro-label">ADMIT ONE · VALID FOREVER</span><p>欢迎来到我们的 2000 天。</p></div></div>}>
    <div className="art-stage envelope-stage"><div className="art-halo" /><EnvelopeArt className="scene-art floating-art" /><div className="stage-caption"><ArrowDown size={13} /><span>{siteData.invitation.salutation}</span></div></div>
  </SceneLayout>
}
