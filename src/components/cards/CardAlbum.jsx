import React from 'react'
import './CardCss/Album.css'

export default function CardAlbum() {
  return (
    <section className="album">
      <div className="container album-container">
        <h3 className="album-title">minha duvida era saber qual era seu favorito</h3>
        <div className="album-grid">
          <div className="album-card left">
            <img src="https://placekitten.com/600/380" alt="Exemplo de foto" />
          </div>
          <div className="album-card right">
            <video src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" controls preload="metadata"></video>
          </div>
        </div>
        <p className="album-context">Guardei momentos em fotos e vídeos para revisitar. Me conta qual te marcou mais.</p>
      </div>
    </section>
  )
}
