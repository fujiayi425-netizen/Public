import { useState } from 'react'
import { Image } from 'lucide-react'
import { publicImageUrl } from '../lib/assets'

interface PhotoPlaceholderProps {
  number?: string
  label?: string
  className?: string
  src?: string
  alt?: string
}

export default function PhotoPlaceholder({ number, label, className = '', src, alt }: PhotoPlaceholderProps) {
  const imageUrl = publicImageUrl(src)
  const [failedUrl, setFailedUrl] = useState<string>()
  const showImage = imageUrl && failedUrl !== imageUrl

  return <div className={`photo-placeholder ${className}`}>
    <div className="photo-placeholder-sky">
      {showImage
        ? <img src={imageUrl} alt={alt || '我们的回忆照片'} decoding="async" onError={() => setFailedUrl(imageUrl)} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
        : <><span className="placeholder-moon" /><Image size={22} strokeWidth={1} /><span>留给我们的照片</span></>}
    </div>
    <div className="photo-caption"><span>{label || '把这一刻，好好收藏。'}</span><span>{number || 'OUR FAVORITE'}</span></div>
  </div>
}
