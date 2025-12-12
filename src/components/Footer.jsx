import React, { useState } from 'react'
import altSong from './audio/music1.mp3'

export default function Footer() {
  const [open, setOpen] = useState(false)

  const like = () => {
    const ev = new CustomEvent('bg-audio-set', { detail: { src: altSong } })
    window.dispatchEvent(ev)
  }
  const dislike = null

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <button className="footer-btn" aria-label="Gostei" onClick={like}>👍</button>
      </div>
      {/* modal removido conforme pedido */}
    </footer>
  )
}
