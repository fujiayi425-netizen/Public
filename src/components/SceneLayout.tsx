import type { ReactNode } from 'react'

type Props = {
  number: string
  eyebrow: string
  title: ReactNode
  description: ReactNode
  children: ReactNode
  detail?: ReactNode
  variant?: string
}

export default function SceneLayout({ number, eyebrow, title, description, children, detail, variant = '' }: Props) {
  return <section className={`scene-layout ${variant}`} aria-labelledby={`scene-title-${number}`}>
    <div className="scene-copy">
      <div className="eyebrow"><span className="eyebrow-line" />{eyebrow}</div>
      <h1 id={`scene-title-${number}`}>{title}</h1>
      <div className="scene-description">{description}</div>
      {detail && <div className="scene-detail">{detail}</div>}
    </div>
    <div className="scene-stage">{children}</div>
  </section>
}
