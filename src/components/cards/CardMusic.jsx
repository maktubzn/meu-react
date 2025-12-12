import React, { useEffect, useRef, useState } from "react";
import "./CardCss/Music.css";

export default function CardMusic() {
  const tracks = [
    { src: "https://open.spotify.com/embed/track/40bK2uosUmAS92c17n98xd?utm_source=generator", height: 152 },
    { src: "https://open.spotify.com/embed/track/2psRActEWsTlYYd7EDoyVR?utm_source=generator", height: 152 },
    { src: "https://open.spotify.com/embed/track/2BwO5K8Q7EPAJSGze3AAh9?utm_source=generator", height: 230 },
    { src: "https://open.spotify.com/embed/track/2mdEsXPu8ZmkHRRtAdC09e?utm_source=generator", height: 352 },
  ]

  const [active, setActive] = useState(null)
  const [resetCounts, setResetCounts] = useState(Array(tracks.length).fill(0))

  const onActivate = (i) => {
    window.dispatchEvent(new Event('external-media-play'))
    setActive(i)
    setResetCounts(cs => cs.map((c, idx) => (idx === i ? c : c + 1)))
  }

  const refs = useRef([])
  const [scale, setScale] = useState(Array(tracks.length).fill(1))

  useEffect(() => {
    const onScroll = () => {
      const vh = window.innerHeight
      const center = vh / 2
      setScale(tracks.map((_, i) => {
        const el = refs.current[i]
        if (!el) return 1
        const rect = el.getBoundingClientRect()
        const mid = rect.top + rect.height / 2
        const dist = Math.abs(mid - center)
        const norm = Math.min(1, dist / (vh * 0.6))
        return 1.08 - norm * 0.18 // escala entre 0.9 e 1.08
      }))
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="MusicSec container music-list">
      {tracks.map((t, i) => (
        <div
          key={`${i}-${resetCounts[i]}`}
          className="spotify-embed music-item"
          style={{ transform: `scale(${scale[i]})`, transition: 'transform 240ms ease' }}
          ref={el => refs.current[i] = el}
          onPointerDown={() => onActivate(i)}
        >
          <iframe
            data-testid="embed-iframe"
            style={{ borderRadius: "12px" }}
            src={t.src}
            width="100%"
            height={t.height}
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      ))}
    </div>
  );
}
