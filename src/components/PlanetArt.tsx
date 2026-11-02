import { useId } from 'react'

export default function PlanetArt() {
  const id = useId().replace(/:/g, '')
  return <div className="planet-composition">
    <svg className="planet-art" viewBox="0 0 640 600" role="img" aria-label="环绕星轨的雾蓝色星球，献给我们的第2000天">
      <defs>
        <radialGradient id={`${id}-planet`} cx="31%" cy="24%" r="80%"><stop stopColor="#f5f4fc" /><stop offset=".31" stopColor="#d6dceb" /><stop offset=".66" stopColor="#aabed8" /><stop offset=".91" stopColor="#7e95bb" /><stop offset="1" stopColor="#7189b2" /></radialGradient>
        <linearGradient id={`${id}-ring`} x1="0" y1="0" x2="1" y2="1"><stop stopColor="#fdfcf8" /><stop offset=".42" stopColor="#c8c6dc" /><stop offset=".75" stopColor="#faf5e8" /><stop offset="1" stopColor="#b9c7df" /></linearGradient>
        <radialGradient id={`${id}-moon`} cx=".3" cy=".25"><stop stopColor="#fffefb" /><stop offset="1" stopColor="#c9c9e0" /></radialGradient>
        <filter id={`${id}-shadow`} x="-40%" y="-40%" width="180%" height="180%"><feDropShadow dx="7" dy="20" stdDeviation="24" floodColor="#7c8eac" floodOpacity=".19" /></filter>
        <clipPath id={`${id}-clip`}><circle cx="325" cy="287" r="153" /></clipPath>
        <linearGradient id={`${id}-shine`}><stop stopColor="#fff" stopOpacity=".25" /><stop offset="1" stopColor="#fff" stopOpacity="0" /></linearGradient>
      </defs>
      <g fill="none" stroke="#9baac5" strokeWidth=".8" opacity=".37">
        <ellipse cx="326" cy="290" rx="260" ry="220" transform="rotate(-23 326 290)" strokeDasharray="2 8" />
        <ellipse cx="326" cy="290" rx="292" ry="174" transform="rotate(-34 326 290)" />
      </g>
      <g className="planet-float">
        <ellipse cx="327" cy="305" rx="256" ry="69" transform="rotate(-26 327 305)" fill="none" stroke={`url(#${id}-ring)`} strokeWidth="23" opacity=".65" />
        <circle cx="325" cy="287" r="153" fill={`url(#${id}-planet)`} filter={`url(#${id}-shadow)`} />
        <g clipPath={`url(#${id}-clip)`} fill="none" strokeLinecap="round">
          <path d="M129 276c68-104 180 60 315-78M163 316c70-96 182 32 320-65" stroke="#f6f6ff" strokeWidth="24" opacity=".15" />
          <path d="M147 344c84-85 205 18 336-57M168 371c110-71 203 20 320-65" stroke="#7f9cc4" strokeWidth="13" opacity=".14" />
          <ellipse cx="255" cy="210" rx="120" ry="100" fill={`url(#${id}-shine)`} stroke="none" />
        </g>
        <path d="M96 381c20 30 140 8 267-54s217-132 196-163" fill="none" stroke={`url(#${id}-ring)`} strokeWidth="22" opacity=".94" />
        <path d="M96 381c20 30 140 8 267-54s217-132 196-163" fill="none" stroke="#faf8f4" strokeWidth="1.3" opacity=".8" />
      </g>
      <circle cx="514" cy="117" r="26" fill={`url(#${id}-moon)`} />
      <circle cx="125" cy="431" r="9" fill="#d8c7a3" />
      <circle cx="550" cy="368" r="4" fill="#a2abc9" />
      <g fill="#7b8da9"><path d="m150 130 2.7 10 10 2.7-10 2.7-2.7 10-2.7-10-10-2.7 10-2.7Z" /><path d="m512 425 2.2 8 8 2.2-8 2.2-2.2 8-2.2-8-8-2.2 8-2.2Z" /></g>
      <g fill="#8996b0" fontSize="10" letterSpacing="2.5" fontFamily="Arial, sans-serif"><text x="72" y="243" transform="rotate(-17 72 243)">A LITTLE UNIVERSE</text><text x="388" y="492" transform="rotate(-17 388 492)">JUST FOR US</text></g>
      <path d="M265 476q52 17 104-3" stroke="#a3afc5" fill="none" strokeWidth=".8" />
    </svg>
    <div className="orbit-note"><span className="orbit-note-star">✧</span><div><span className="micro-label">SOMEWHERE IN THE UNIVERSE</span><p>有一颗星球，只为你亮起。</p></div></div>
    <span className="planet-coordinate" aria-hidden="true">EST. OUR FIRST DAY · ∞</span>
  </div>
}
