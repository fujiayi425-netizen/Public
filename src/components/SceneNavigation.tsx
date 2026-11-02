import { sceneLabels } from '../data/siteData'

export default function SceneNavigation({ current, visited, onSelect }: { current: number; visited: Set<number>; onSelect: (index: number) => void }) {
  return <nav className="scene-navigation" aria-label="故事章节">
    <div className="navigation-track" aria-hidden="true" />
    {sceneLabels.map((scene, index) => <button type="button" key={scene.id} onClick={() => onSelect(index)} className={`chapter-node ${current === index ? 'is-current' : ''} ${visited.has(index) ? 'is-visited' : ''}`} aria-current={current === index ? 'step' : undefined} aria-label={`第 ${index + 1} 章：${scene.name}`}>
      <span className="node-star" aria-hidden="true">✦</span>
      <span className="node-title"><span className="node-number">{String(index + 1).padStart(2, '0')}</span>{scene.name}</span>
    </button>)}
  </nav>
}
