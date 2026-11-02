import { useId } from 'react';

interface ArtProps { className?: string }

function Spark({ x, y, size = 8, opacity = 1 }: { x: number; y: number; size?: number; opacity?: number }) {
  return <path d={`M${x} ${y - size}Q${x} ${y} ${x + size} ${y}Q${x} ${y} ${x} ${y + size}Q${x} ${y} ${x - size} ${y}Q${x} ${y} ${x} ${y - size}`} fill="#F8F7F3" opacity={opacity} />;
}

export function CarouselArt({ className }: ArtProps) {
  const id = useId();
  return <svg className={className} viewBox="0 0 600 500" fill="none" role="img" aria-label="淡蓝色旋转木马与等待放入回忆的相片框">
    <defs>
      <linearGradient id={`${id}-roof`} x1="155" y1="138" x2="443" y2="227" gradientUnits="userSpaceOnUse"><stop stopColor="#E4ECF7"/><stop offset=".5" stopColor="#A9BDD7"/><stop offset="1" stopColor="#D6D0E5"/></linearGradient>
      <linearGradient id={`${id}-base`} x1="300" y1="381" x2="300" y2="434" gradientUnits="userSpaceOnUse"><stop stopColor="#EFF3F8"/><stop offset="1" stopColor="#A9BDD7"/></linearGradient>
      <linearGradient id={`${id}-photo`} x1="0" y1="0" x2="1" y2="1"><stop stopColor="#C5D3E5"/><stop offset="1" stopColor="#D6D0E5"/></linearGradient>
      <radialGradient id={`${id}-halo`}><stop stopColor="#DCE8F5" stopOpacity=".3"/><stop offset="1" stopColor="#DCE8F5" stopOpacity="0"/></radialGradient>
      <filter id={`${id}-shadow`} x="-30%" y="-30%" width="160%" height="180%"><feDropShadow dx="0" dy="12" stdDeviation="12" floodColor="#34496B" floodOpacity=".13"/></filter>
    </defs>
    <ellipse cx="300" cy="277" rx="252" ry="211" fill={`url(#${id}-halo)`}/>
    <ellipse cx="302" cy="433" rx="190" ry="19" fill="#435B81" opacity=".1"/>
    <ellipse cx="300" cy="288" rx="233" ry="107" stroke="#E8EDF5" strokeOpacity=".25" strokeDasharray="2 9" transform="rotate(-17 300 288)"/>
    <Spark x={97} y={174} size={9} opacity={.75}/><Spark x={493} y={145} size={6} opacity={.8}/><Spark x={512} y={334} size={10} opacity={.55}/>
    <circle cx="149" cy="329" r="2" fill="#D8C7A3"/><circle cx="474" cy="235" r="2.5" fill="#E8EDF5"/><circle cx="230" cy="81" r="2" fill="#D8C7A3"/>
    <g filter={`url(#${id}-shadow)`}>
      <path d="M292 133V84" stroke="#D8C7A3" strokeWidth="3"/>
      <path d="M294 84C309 74 318 96 336 84V105C318 117 308 96 294 105Z" fill="#D6D0E5" stroke="#F8F7F3" strokeWidth=".7"/>
      <circle cx="292" cy="82" r="4" fill="#F8F7F3"/>
      <path d="M153 217Q208 187 282 133Q292 125 303 133Q374 185 448 217Z" fill={`url(#${id}-roof)`} stroke="#E8EDF5" strokeWidth="1.5"/>
      <path d="M180 215L283 135Q258 175 237 218Z" fill="#F8F7F3" fillOpacity=".76"/>
      <path d="M273 219L290 134H297L321 219Z" fill="#F8F7F3" fillOpacity=".83"/>
      <path d="M357 219Q332 166 303 135L417 217Z" fill="#F8F7F3" fillOpacity=".76"/>
      <ellipse cx="300" cy="218" rx="150" ry="18" fill="#E8EDF5" stroke="#D8C7A3" strokeWidth="1.5"/>
      <path d="M150 219V234C166 246 182 246 198 234C214 246 230 246 246 234C262 246 278 246 294 234C310 246 326 246 342 234C358 246 374 246 390 234C410 248 431 246 450 234V219" fill="#DCE8F5" stroke="#A9BDD7"/>
      {Array.from({ length: 19 }, (_, index) => <circle key={index} cx={162 + index * 15.3} cy={223 + Math.sin(index / 18 * Math.PI) * 11} r="2" fill="#F8F7F3"/>)}
      <path d="M300 238V397" stroke="#D8C7A3" strokeWidth="9"/><path d="M298 238V397" stroke="#F8F7F3" strokeWidth="2"/>
      {[190, 244, 356, 410].map((x) => <g key={x}><path d={`M${x} 241V393`} stroke="#D8C7A3" strokeWidth="2.4"/><path d={`M${x - 1} 246V386`} stroke="#F8F7F3" strokeOpacity=".75"/></g>)}
      <g transform="translate(162 280) rotate(-9 34 42)"><rect width="68" height="88" rx="2" fill="#F8F7F3"/><rect x="6" y="6" width="56" height="61" fill={`url(#${id}-photo)`}/><path d="M10 54L27 37L38 47L48 33L59 54" stroke="#F8F7F3" strokeOpacity=".65"/><circle cx="44" cy="23" r="6" fill="#F8F7F3" fillOpacity=".6"/><path d="M20 77H48" stroke="#A9BDD7" strokeWidth="1.5"/></g>
      <g transform="translate(338 267) rotate(8 36 47)"><rect width="76" height="98" rx="2" fill="#F8F7F3"/><rect x="6" y="6" width="64" height="69" fill={`url(#${id}-photo)`}/><circle cx="38" cy="39" r="16" stroke="#F8F7F3" strokeOpacity=".6"/><path d="M27 39H49M38 28V50" stroke="#F8F7F3" strokeOpacity=".6"/><path d="M22 86H54" stroke="#A9BDD7" strokeWidth="1.5"/></g>
      <ellipse cx="300" cy="394" rx="156" ry="24" fill="#F8F7F3" stroke="#D8C7A3" strokeWidth="1.2"/>
      <path d="M144 394V411C144 442 456 442 456 411V394C456 426 144 426 144 394Z" fill={`url(#${id}-base)`} stroke="#DCE8F5"/>
      <path d="M145 410C185 437 414 437 455 410" stroke="#D8C7A3" strokeWidth="1.2"/>
      <ellipse cx="300" cy="394" rx="127" ry="15" stroke="#A9BDD7" strokeOpacity=".45"/>
    </g>
  </svg>;
}

export function EnvelopeArt({ className }: ArtProps) {
  const id = useId();
  return <svg className={className} viewBox="0 0 600 500" fill="none" role="img" aria-label="星光中的奶油白宇宙邀请函">
    <defs>
      <linearGradient id={`${id}-paper`} x1="177" y1="140" x2="430" y2="370" gradientUnits="userSpaceOnUse"><stop stopColor="#FFFDF8"/><stop offset="1" stopColor="#E8EDF5"/></linearGradient>
      <linearGradient id={`${id}-seal`} x1="275" y1="240" x2="325" y2="290" gradientUnits="userSpaceOnUse"><stop stopColor="#C8D6E7"/><stop offset="1" stopColor="#8FA7C7"/></linearGradient>
      <filter id={`${id}-shadow`} x="-40%" y="-50%" width="180%" height="220%"><feDropShadow dx="0" dy="18" stdDeviation="18" floodColor="#354B70" floodOpacity=".18"/></filter>
    </defs>
    <ellipse cx="302" cy="288" rx="219" ry="118" stroke="#E8EDF5" strokeOpacity=".3" transform="rotate(-24 302 288)"/>
    <ellipse cx="304" cy="393" rx="139" ry="13" fill="#526B91" opacity=".08"/>
    <Spark x={119} y={183} size={9} opacity={.8}/><Spark x={475} y={316} size={9} opacity={.65}/><Spark x={445} y={131} size={5} opacity={.7}/>
    <circle cx="179" cy="355" r="2" fill="#D8C7A3"/><circle cx="444" cy="221" r="2" fill="#F8F7F3"/>
    <g transform="rotate(-7 300 255)" filter={`url(#${id}-shadow)`}>
      <path d="M156 217L296 119Q300 116 305 119L445 217V350H156Z" fill="#BACAE0" stroke="#DCE8F5"/>
      <rect x="184" y="136" width="234" height="187" rx="5" fill={`url(#${id}-paper)`} stroke="#F8F7F3"/>
      <rect x="195" y="148" width="212" height="163" rx="2" stroke="#D8C7A3" strokeOpacity=".7"/>
      <text x="301" y="179" textAnchor="middle" fill="#526B91" fontSize="9" letterSpacing="3" fontFamily="Georgia, serif">YOU ARE INVITED</text>
      <path d="M301 192V206M294 199H308" stroke="#D8C7A3"/>
      <text x="301" y="239" textAnchor="middle" fill="#526B91" fontSize="33" letterSpacing="4" fontFamily="Georgia, serif">2000 DAYS</text>
      <path d="M252 258H350M267 268H335" stroke="#A9BDD7" strokeWidth="1.2"/>
      <path d="M156 218L300 296L445 218V350Q445 355 440 355H161Q156 355 156 350Z" fill="#F8F7F3" stroke="#DCE8F5"/>
      <path d="M157 350L262 271M443 350L339 271" stroke="#C7D4E4" strokeWidth="1.1"/>
      <path d="M156 218L300 296L445 218" stroke="#D8C7A3" strokeWidth="1.2" strokeOpacity=".65"/>
      <circle cx="301" cy="289" r="24" fill={`url(#${id}-seal)`} stroke="#E8EDF5"/>
      <circle cx="301" cy="289" r="19" stroke="#F8F7F3" strokeOpacity=".5"/>
      <circle cx="301" cy="289" r="8" stroke="#F8F7F3"/>
      <ellipse cx="301" cy="289" rx="15" ry="4" stroke="#F8F7F3" transform="rotate(-25 301 289)"/>
    </g>
    <path d="M449 359Q474 340 477 366Q478 383 458 390" stroke="#D8C7A3" strokeOpacity=".65" strokeDasharray="2 5"/>
  </svg>;
}

export function BalloonArt({ className }: ArtProps) {
  const id = useId();
  return <svg className={className} viewBox="0 0 600 500" fill="none" role="img" aria-label="带着愿望卡片的蓝紫色透明气球">
    <defs>
      <radialGradient id={`${id}-blue`} cx=".3" cy=".2" r=".8"><stop stopColor="#F8F7F3" stopOpacity=".85"/><stop offset=".35" stopColor="#DCE8F5" stopOpacity=".7"/><stop offset=".8" stopColor="#A9BDD7" stopOpacity=".65"/><stop offset="1" stopColor="#7E9BBE" stopOpacity=".8"/></radialGradient>
      <radialGradient id={`${id}-rose`} cx=".3" cy=".2" r=".8"><stop stopColor="#F8F7F3" stopOpacity=".9"/><stop offset=".5" stopColor="#E6D6E0" stopOpacity=".7"/><stop offset="1" stopColor="#D9B9C2" stopOpacity=".8"/></radialGradient>
      <radialGradient id={`${id}-lilac`} cx=".3" cy=".2" r=".8"><stop stopColor="#F8F7F3" stopOpacity=".9"/><stop offset=".5" stopColor="#D6D0E5" stopOpacity=".7"/><stop offset="1" stopColor="#B0A5CA" stopOpacity=".75"/></radialGradient>
      <filter id={`${id}-shadow`} x="-30%" y="-30%" width="170%" height="180%"><feDropShadow dx="0" dy="12" stdDeviation="15" floodColor="#526B91" floodOpacity=".1"/></filter>
    </defs>
    <ellipse cx="290" cy="261" rx="218" ry="165" stroke="#E8EDF5" strokeOpacity=".23" strokeDasharray="3 9" transform="rotate(-19 290 261)"/>
    <path d="M204 229C196 287 266 302 282 407M383 242C378 296 319 315 282 407M299 204C291 265 293 337 282 407" stroke="#F8F7F3" strokeWidth="1.1" strokeOpacity=".7"/>
    <g filter={`url(#${id}-shadow)`}>
      <path d="M203 232C161 206 141 174 151 143C162 111 198 112 207 137C220 110 255 114 262 141C271 174 248 211 203 232Z" fill={`url(#${id}-rose)`} stroke="#F8F7F3" strokeOpacity=".65"/>
      <path d="M203 230L199 239L207 238Z" fill="#D9B9C2"/><path d="M167 148C170 137 182 132 188 136" stroke="#F8F7F3" strokeWidth="4" strokeLinecap="round" strokeOpacity=".65"/>
      <ellipse cx="378" cy="173" rx="58" ry="73" transform="rotate(12 378 173)" fill={`url(#${id}-lilac)`} stroke="#F8F7F3" strokeOpacity=".6"/>
      <path d="M383 242L379 251L388 250Z" fill="#C4BAD9"/><path d="M348 139Q351 122 364 119" stroke="#F8F7F3" strokeWidth="5" strokeLinecap="round" strokeOpacity=".65"/>
      <ellipse cx="291" cy="121" rx="69" ry="86" transform="rotate(-7 291 121)" fill={`url(#${id}-blue)`} stroke="#F8F7F3" strokeOpacity=".75"/>
      <path d="M299 205L294 214L304 213Z" fill="#A9BDD7"/>
      <path d="M248 83Q254 59 273 55" stroke="#F8F7F3" strokeWidth="6" strokeLinecap="round" strokeOpacity=".7"/>
      <path d="M327 158Q326 176 312 187" stroke="#E8EDF5" strokeWidth="2" strokeLinecap="round" strokeOpacity=".55"/>
      <g transform="rotate(8 283 403)"><rect x="234" y="367" width="100" height="77" rx="3" fill="#F8F7F3"/><rect x="240" y="373" width="88" height="65" rx="1" stroke="#D8C7A3" strokeOpacity=".7"/><circle cx="284" cy="377" r="2" fill="#A9BDD7"/><text x="284" y="402" textAnchor="middle" fontFamily="Georgia, serif" fontSize="10" letterSpacing="1.4" fill="#526B91">MAKE A WISH</text><path d="M260 416H308M268 423H300" stroke="#A9BDD7" strokeWidth="1"/></g>
    </g>
    <Spark x={127} y={289} size={8} opacity={.7}/><Spark x={459} y={99} size={9} opacity={.75}/><Spark x={436} y={304} size={5} opacity={.7}/>
    <circle cx="194" cy="68" r="2" fill="#D8C7A3"/><circle cx="408" cy="370" r="2" fill="#E8EDF5"/>
  </svg>;
}

export function GashaponArt({ className }: ArtProps) {
  const id = useId();
  const capsules = [[240,225,'#D6D0E5'],[288,247,'#A9BDD7'],[334,228,'#D9B9C2'],[366,263,'#D6D0E5'],[226,268,'#D9B9C2'],[267,293,'#D6D0E5'],[316,285,'#DCE8F5'],[350,304,'#A9BDD7']] as const;
  return <svg className={className} viewBox="0 0 600 500" fill="none" role="img" aria-label="奶油白与浅蓝色恋爱扭蛋机">
    <defs>
      <linearGradient id={`${id}-base`} x1="200" y1="300" x2="385" y2="435" gradientUnits="userSpaceOnUse"><stop stopColor="#F8F7F3"/><stop offset="1" stopColor="#B6C8E0"/></linearGradient>
      <radialGradient id={`${id}-glass`} cx=".32" cy=".2" r=".8"><stop stopColor="#F8F7F3" stopOpacity=".65"/><stop offset=".7" stopColor="#DCE8F5" stopOpacity=".15"/><stop offset="1" stopColor="#A9BDD7" stopOpacity=".55"/></radialGradient>
      <filter id={`${id}-shadow`} x="-40%" y="-20%" width="180%" height="160%"><feDropShadow dx="0" dy="15" stdDeviation="15" floodColor="#354B70" floodOpacity=".14"/></filter>
    </defs>
    <ellipse cx="300" cy="439" rx="137" ry="15" fill="#526B91" opacity=".1"/>
    <ellipse cx="303" cy="262" rx="201" ry="151" stroke="#E8EDF5" strokeOpacity=".25" transform="rotate(-19 303 262)"/>
    <Spark x={137} y={235} size={9} opacity={.8}/><Spark x={449} y={134} size={8} opacity={.7}/><Spark x={460} y={348} size={5} opacity={.7}/>
    <g filter={`url(#${id}-shadow)`}>
      <path d="M286 97V79" stroke="#D8C7A3" strokeWidth="2"/><circle cx="286" cy="73" r="7" fill="#D8C7A3"/>
      <path d="M233 115Q237 96 250 96H327Q342 96 347 115Z" fill="#DCE8F5" stroke="#E8EDF5"/>
      <circle cx="291" cy="221" r="110" fill={`url(#${id}-glass)`} stroke="#E8EDF5" strokeWidth="2"/>
      {capsules.map(([x,y,color],i)=><g key={i} transform={`rotate(${i*31} ${x} ${y})`}><circle cx={x} cy={y} r="24" fill={color}/><path d={`M${x-24} ${y}a24 24 0 0 1 48 0Z`} fill="#F8F7F3" fillOpacity=".48"/><path d={`M${x-23} ${y}H${x+23}`} stroke="#F8F7F3" strokeOpacity=".7"/><ellipse cx={x-7} cy={y-11} rx="7" ry="3" fill="#F8F7F3" fillOpacity=".65" transform={`rotate(-30 ${x-7} ${y-11})`}/></g>)}
      <path d="M205 181Q212 139 246 130" stroke="#F8F7F3" strokeWidth="7" strokeLinecap="round" strokeOpacity=".65"/>
      <path d="M375 239Q375 274 351 294" stroke="#F8F7F3" strokeWidth="3" strokeLinecap="round" strokeOpacity=".4"/>
      <path d="M205 313H378L389 424Q389 436 377 436H206Q194 436 195 424Z" fill={`url(#${id}-base)`} stroke="#E8EDF5" strokeWidth="1.5"/>
      <rect x="198" y="307" width="187" height="18" rx="8" fill="#A9BDD7" stroke="#DCE8F5"/>
      <rect x="211" y="337" width="160" height="84" rx="10" stroke="#A9BDD7" strokeOpacity=".55"/>
      <text x="291" y="351" textAnchor="middle" fill="#526B91" fontFamily="Georgia, serif" fontSize="7" letterSpacing="2">A LITTLE SURPRISE</text>
      <circle cx="261" cy="384" r="22" fill="#A9BDD7" stroke="#F8F7F3" strokeWidth="1.5"/><circle cx="261" cy="384" r="16" stroke="#DCE8F5"/>
      <rect x="242" y="380" width="38" height="8" rx="4" fill="#F8F7F3" transform="rotate(-25 261 384)"/>
      <rect x="307" y="367" width="43" height="37" rx="8" fill="#7188A9" stroke="#DCE8F5"/>
      <path d="M312 373H345V386Q330 395 312 386Z" fill="#526B91"/>
      <path d="M208 434V443H376V434" fill="#8FA7C7"/>
    </g>
    <g transform="rotate(21 425 407)"><circle cx="425" cy="407" r="26" fill="#D6D0E5" stroke="#E8EDF5"/><path d="M399 407a26 26 0 0 1 52 0Z" fill="#F8F7F3" fillOpacity=".5"/><path d="M399 407H451" stroke="#F8F7F3"/><ellipse cx="416" cy="394" rx="8" ry="3" fill="#F8F7F3" fillOpacity=".6"/></g>
  </svg>;
}

function Rose({ x, y, scale = 1, rose = false }: { x: number; y: number; scale?: number; rose?: boolean }) {
  const c = rose ? '#D9B9C2' : '#F8F7F3';
  return <g transform={`translate(${x} ${y}) scale(${scale})`}><path d="M0 7Q8 42 4 73" stroke="#A9BDD7" strokeWidth="1.5"/><path d="M4 51Q-20 37 -21 48Q-15 60 4 56M5 39Q27 22 27 36Q23 47 5 45" fill="#A9BDD7" fillOpacity=".6"/>
    <path d="M-4-12C-18-23-30-5-21 6C-23 22-3 29 7 19C24 23 31 3 20-7C21-24 4-27-4-12Z" fill={c} stroke="#D6D0E5" strokeWidth="1"/><path d="M-4-12C-13-8-15 4-8 11C0 20 14 13 14 3C15-8 3-12-4-12ZM-8 9C-6 0 3-2 9 4C9 13-2 17-8 9Z" stroke={rose ? '#C19CA9' : '#C5CEDC'} strokeWidth=".8"/><path d="M-20-3Q-13-8-9-5M20-6Q13-1 14 5M-14 17Q-11 9-8 10" stroke="#D6D0E5" strokeWidth=".7"/></g>;
}

export function GardenArt({ className }: ArtProps) {
  const id = useId();
  return <svg className={className} viewBox="0 0 600 500" fill="none" role="img" aria-label="白玫瑰与浅紫花朵围绕的专属情书">
    <defs><linearGradient id={`${id}-paper`} x1="200" y1="120" x2="410" y2="410" gradientUnits="userSpaceOnUse"><stop stopColor="#FFFDF8"/><stop offset="1" stopColor="#F1F0F3"/></linearGradient><filter id={`${id}-shadow`} x="-40%" y="-30%" width="190%" height="180%"><feDropShadow dx="0" dy="12" stdDeviation="16" floodColor="#354B70" floodOpacity=".13"/></filter></defs>
    <ellipse cx="302" cy="267" rx="213" ry="160" stroke="#E8EDF5" strokeOpacity=".25" transform="rotate(-15 302 267)"/>
    <g transform="rotate(-5 300 258)" filter={`url(#${id}-shadow)`}>
      <rect x="191" y="105" width="221" height="305" rx="4" fill={`url(#${id}-paper)`} stroke="#E8EDF5"/>
      <rect x="202" y="116" width="199" height="283" rx="1" stroke="#D8C7A3" strokeOpacity=".5"/>
      <text x="301" y="151" textAnchor="middle" fill="#526B91" fontFamily="Georgia, serif" fontSize="8" letterSpacing="2.5">A LETTER JUST FOR YOU</text>
      <path d="M301 169V181M295 175H307" stroke="#D8C7A3"/>
      <text x="224" y="212" fill="#526B91" fontFamily="Georgia, serif" fontSize="18" fontStyle="italic">My favorite person,</text>
      {[237,253,269,285,315,331,347].map((y,i)=><path key={y} d={`M224 ${y}H${i===3?338:i===6?320:377}`} stroke="#A9BDD7" strokeWidth="1" strokeOpacity=".6"/>)}
      <path d="M329 373Q344 362 352 372Q359 382 370 367" stroke="#526B91" strokeOpacity=".6" strokeWidth="1"/>
    </g>
    <g transform="rotate(-25 169 315)"><Rose x={161} y={272} scale={1.12}/><Rose x={119} y={297} scale={.68}/><path d="M170 376Q207 331 188 278M170 363Q149 331 138 332M178 342Q207 326 204 316" stroke="#A9BDD7" strokeWidth="1.3"/>
      {[[188,280],[192,292],[183,299],[197,306],[185,314],[138,332],[147,340],[204,316]].map(([x,y],i)=><g key={i}><ellipse cx={x-3} cy={y} rx="4" ry="7" fill="#D6D0E5" transform={`rotate(-30 ${x} ${y})`}/><ellipse cx={x+3} cy={y+2} rx="4" ry="6" fill="#E8EDF5" transform={`rotate(30 ${x} ${y})`}/></g>)}</g>
    <g transform="rotate(23 426 225)"><Rose x={425} y={198} scale={.9}/><Rose x={455} y={242} scale={.6} rose/><path d="M426 286Q447 244 470 230M428 269Q400 241 405 226" stroke="#A9BDD7" strokeWidth="1.2"/>{[[470,230],[459,239],[450,246],[405,226],[410,239]].map(([x,y],i)=><g key={i}><ellipse cx={x-3} cy={y} rx="4" ry="6" fill="#D6D0E5"/><ellipse cx={x+3} cy={y+1} rx="4" ry="6" fill="#E8EDF5"/></g>)}</g>
    <path d="M434 356Q448 351 443 363Q436 368 434 356Z" fill="#D9B9C2" fillOpacity=".7" transform="rotate(30 438 360)"/><path d="M157 145Q173 141 167 154Q159 157 157 145Z" fill="#D9B9C2" fillOpacity=".5"/>
    <Spark x={131} y={210} size={6} opacity={.75}/><Spark x={464} y={143} size={8} opacity={.7}/><Spark x={389} y={445} size={5} opacity={.6}/>
  </svg>;
}

export function GreetingArt({ className }: ArtProps) {
  const id = useId();
  return <svg className={className} viewBox="0 0 600 500" fill="none" role="img" aria-label="写着2000天的奶油白纪念贺卡封面">
    <defs><linearGradient id={`${id}-card`} x1="188" y1="99" x2="416" y2="398" gradientUnits="userSpaceOnUse"><stop stopColor="#FFFDF8"/><stop offset="1" stopColor="#E8EDF5"/></linearGradient><radialGradient id={`${id}-planet`} cx=".3" cy=".25" r=".75"><stop stopColor="#E8EDF5"/><stop offset=".6" stopColor="#B7C9E1"/><stop offset="1" stopColor="#8EA6C7"/></radialGradient><filter id={`${id}-shadow`} x="-50%" y="-30%" width="200%" height="180%"><feDropShadow dx="0" dy="16" stdDeviation="18" floodColor="#354B70" floodOpacity=".17"/></filter></defs>
    <ellipse cx="300" cy="271" rx="216" ry="149" stroke="#E8EDF5" strokeOpacity=".28" transform="rotate(-23 300 271)"/>
    <Spark x={131} y={184} size={8} opacity={.75}/><Spark x={456} y={321} size={9} opacity={.7}/><Spark x={428} y={106} size={5} opacity={.6}/>
    <g transform="rotate(7 300 255)" filter={`url(#${id}-shadow)`}>
      <rect x="188" y="99" width="238" height="320" rx="9" fill="#BACAE0" stroke="#DCE8F5"/>
      <rect x="181" y="93" width="238" height="320" rx="9" fill={`url(#${id}-card)`} stroke="#DCE8F5" strokeWidth="1.5"/>
      <rect x="195" y="107" width="210" height="292" rx="3" stroke="#D8C7A3" strokeOpacity=".65"/>
      <text x="300" y="137" textAnchor="middle" fill="#526B91" fontFamily="Georgia, serif" fontSize="7" letterSpacing="2.4">A LITTLE UNIVERSE FOR US</text>
      <circle cx="300" cy="191" r="26" fill={`url(#${id}-planet)`}/>
      <ellipse cx="300" cy="191" rx="46" ry="10" stroke="#D8C7A3" strokeWidth="1.4" transform="rotate(-27 300 191)"/>
      <path d="M275 185Q285 176 303 177M280 198Q294 188 316 190" stroke="#F8F7F3" strokeOpacity=".35" strokeWidth="2"/>
      <text x="300" y="275" textAnchor="middle" fill="#526B91" fontFamily="Georgia, serif" fontSize="66" letterSpacing="2">2000</text>
      <text x="300" y="298" textAnchor="middle" fill="#526B91" fontFamily="Georgia, serif" fontSize="11" letterSpacing="8">DAYS</text>
      <path d="M276 322H324" stroke="#D8C7A3"/>
      <text x="300" y="348" textAnchor="middle" fill="#526B91" fontFamily="Georgia, serif" fontSize="7" letterSpacing="1.4">TO MY FAVORITE PERSON</text>
      <text x="300" y="371" textAnchor="middle" fill="#7C91AE" fontFamily="Georgia, serif" fontStyle="italic" fontSize="10">2000 days down, forever to go.</text>
    </g>
    <circle cx="150" cy="342" r="2" fill="#D8C7A3"/><circle cx="471" cy="218" r="2" fill="#F8F7F3"/>
  </svg>;
}
