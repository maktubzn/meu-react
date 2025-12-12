import React, { useEffect, useRef, useState } from 'react'
import defaultSong from './Reflections.mp3'

export default function Audio({ src, autoStart = true, loop = true }) {
  const audioRef = useRef(null)
  const [playing, setPlaying] = useState(false)
  const [muted, setMuted] = useState(true)
  const [volume, setVolume] = useState(0.5)
  const [isMobile, setIsMobile] = useState(false)
  const [showVolume, setShowVolume] = useState(true)
  const [nearEnd, setNearEnd] = useState(false)

  const effectiveSrc = src || defaultSong

  useEffect(() => {
    const a = audioRef.current
    if (!a) return
    a.loop = loop
    a.volume = volume
    a.muted = muted
    if (autoStart) {
      a.play().then(() => {
        setPlaying(true)
      }).catch(() => {
        setPlaying(false)
      })
    }
  }, [])

  useEffect(() => {
    const a = audioRef.current
    if (!a) return
    a.volume = volume
    a.muted = muted
  }, [volume, muted])

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 600px)')
    const update = () => {
      setIsMobile(mq.matches)
      setShowVolume(!mq.matches)
      if (mq.matches) {
        setVolume(0.25)
      }
    }
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  useEffect(() => {
    const onScroll = () => {
      const bottom = window.scrollY + window.innerHeight
      const threshold = 120
      const docH = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
      const near = bottom >= docH - threshold
      setNearEnd(isMobile && near)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [isMobile])

  useEffect(() => {
    const onVis = () => {
      const a = audioRef.current
      if (!a) return
      if (document.visibilityState === 'hidden') {
        a.volume = Math.min(a.volume, 0.1)
      } else {
        a.volume = volume
      }
    }
    document.addEventListener('visibilitychange', onVis)
    return () => document.removeEventListener('visibilitychange', onVis)
  }, [volume])

  useEffect(() => {
    const onFirst = () => {
      const a = audioRef.current
      if (!a) return
      if (!playing) {
        a.play().then(() => setPlaying(true)).catch(() => {})
      }
      if (muted) {
        setMuted(false)
        rampTo(isMobile ? 0.25 : 0.5, 1000)
      }
      document.removeEventListener('click', onFirst)
      document.removeEventListener('touchstart', onFirst)
    }
    document.addEventListener('click', onFirst, { once: true })
    document.addEventListener('touchstart', onFirst, { once: true })
    return () => {
      document.removeEventListener('click', onFirst)
      document.removeEventListener('touchstart', onFirst)
    }
  }, [muted, isMobile, playing])

  useEffect(() => {
    const pauseOnExternal = () => {
      const a = audioRef.current
      if (!a) return
      a.pause()
      setPlaying(false)
    }
    window.addEventListener('external-media-play', pauseOnExternal)
    return () => window.removeEventListener('external-media-play', pauseOnExternal)
  }, [])

  useEffect(() => {
    const onSet = (e) => {
      const a = audioRef.current
      if (!a) return
      const next = e.detail && e.detail.src
      if (next) {
        a.src = next
        a.play().then(() => {
          setPlaying(true)
          setMuted(false)
        }).catch(() => {})
      }
    }
    window.addEventListener('bg-audio-set', onSet)
    return () => window.removeEventListener('bg-audio-set', onSet)
  }, [])

  const toggleMute = () => {
    const a = audioRef.current
    const newMuted = !muted
    setMuted(newMuted)
    if (a) {
      a.muted = newMuted
      if (!newMuted) {
        rampTo(isMobile ? 0.25 : 0.5, 600)
      }
    }
    if (isMobile) {
      setShowVolume(true)
      window.clearTimeout(window.__volHide)
      window.__volHide = window.setTimeout(() => setShowVolume(false), 3000)
    }
  }

  const rampTo = (target, ms = 1500) => {
    const a = audioRef.current
    if (!a) return
    const start = a.volume
    const steps = Math.max(10, Math.floor(ms / 50))
    let i = 0
    const id = setInterval(() => {
      i++
      const v = start + (target - start) * (i / steps)
      a.volume = Math.max(0, Math.min(1, v))
      setVolume(a.volume)
      if (i >= steps) clearInterval(id)
    }, ms / steps)
  }

  

  return (
    <div className={`audio-widget ${showVolume ? 'expanded' : 'compact'} ${nearEnd ? 'near-end' : ''}`}>
      <audio ref={audioRef} src={effectiveSrc} preload="auto" autoPlay muted={muted} playsInline loop={loop} />
      {!nearEnd && (
        <div className="audio-controls">
          <button className="audio-btn" onClick={toggleMute}>{muted ? 'Som' : 'Mudo'}</button>
          {showVolume && (
            <input
              className="audio-volume"
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={e => setVolume(parseFloat(e.target.value))}
            />
          )}
        </div>
      )}
    </div>
  )
}
