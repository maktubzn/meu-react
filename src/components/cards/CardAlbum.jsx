import React, { useEffect, useRef } from 'react'
import './CardCss/Album.css'
import florSosoVideo from './florsoso.mp4';
import fotoHorizont from './pexels-gasparzaldo-22031805.jpg';

export default function CardAlbum() {
  const refs = useRef([])
  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('in')
      })
    }, { threshold: 0.2 })
    refs.current.forEach(el => el && obs.observe(el))
    return () => obs.disconnect()
  }, [])
  return (
    <section className="album">
      <div className="container album-container">
        <h3 className="album-title">momentos visuais – lembranças e artistas</h3>
        <div className="album-grid">
          <div ref={el => refs.current[0]=el} className="album-card slide-left">
            <img src={fotoHorizont} alt="Flores laranjas em um jardim" />
          </div>
          <div ref={el => refs.current[1]=el} className="album-card slide-right">
            <video src={florSosoVideo} autoPlay loop muted ></video>
            <h1 className='h1alb1'>a cor me lembra seus cabelos</h1>
          </div>
        </div>

        <div className="album-grid">
          <div ref={el => refs.current[2]=el}  style={{margin:'10%'}} className="album-card slide-left">
            <div className="artist-card">
              <h4 style={{textAlign:'center'}}>o mar</h4>
              <p style={{textAlign:'center'}}>As cores de um por do sol me lembram de você.</p>
            </div>
          </div>
          <div ref={el => refs.current[3]=el} className="album-card slide-right">
            <div className="artist-card">
              <h4 style={{textAlign:'center'}}>Uma canção marcante</h4>
              <p style={{textAlign:'center'}}>Guia a memória como um abraço musical.</p>
            </div>
          </div>
        </div>

        <p className="album-context">É loucura eu olhar pra algo e sempre procurar lembrar de você.</p>
      </div>
    </section>
  )
}
