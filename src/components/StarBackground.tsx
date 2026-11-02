import { useMemo } from 'react'

/** Fixed, deterministic positions keep StrictMode and screenshots stable. */
export default function StarBackground() {
  const stars = useMemo(() => Array.from({ length: 38 }, (_, i) => ({
    x: (i * 37 + 7) % 100,
    y: (i * 23 + 13) % 100,
    size: i % 7 === 0 ? 4 : 2,
    delay: `${(i % 6) * -1.3}s`,
  })), [])
  return <div className="star-background" aria-hidden="true">
    <div className="sky-glow sky-glow-one" /><div className="sky-glow sky-glow-two" />
    {stars.map((star, i) => <i key={i} className="sky-star" style={{ left: `${star.x}%`, top: `${star.y}%`, width: star.size, height: star.size, animationDelay: star.delay }} />)}
  </div>
}
