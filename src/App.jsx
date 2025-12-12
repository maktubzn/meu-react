import Navbar from "./components/nav/Navbar.jsx";
import Reclamacoes from "./components/Reclamacoes.jsx";
import React, { useEffect, useState } from "react";
import BackgroundCanvas from "./components/BackgroundCanvas.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import CardMusic from "./components/cards/CardMusic.jsx";
import CardAlbum from "./components/cards/CardAlbum.jsx";
import Audio from "./components/audio/Audio.jsx";
import Calendar from "./components/nav/Calendar.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  const [route, setRoute] = useState(window.location.hash || "#/")
  const [introOpen, setIntroOpen] = useState(true)
  useEffect(() => {
    const onHash = () => setRoute(window.location.hash || "#/")
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])
  const start = () => {
    setIntroOpen(false)
  }
  return (
    <>
      <Navbar />
      <BackgroundCanvas />
      {introOpen && (
        <div className="intro-overlay" role="dialog" aria-modal="true" onClick={start}>
          <div className="intro-bg">
            <div className="orb orb1"></div>
            <div className="orb orb2"></div>
            <div className="orb orb3"></div>
          </div>
          <div className="intro-card">
            <div className="intro-title">Sua biblioteca Soso</div>
            <div className="intro-text">Clique aqui</div>
          </div>
        </div>
      )}
      {route === '#/reclamacoes' ? (
        <>
          <Reclamacoes />
        </>
      ) : (
        <>
          <Hero
            title="Seu universo particular"
            subtitle="Memórias, músicas e momentos que me lembra você."
          />
          <section className="embed">
            <div className="embed-grid">
              <div className="embed-fall">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/aSugSGCC12I?start=10"
                  title="vídeo 1"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  referrerPolicy="strict-origin-when-cross-origin"
                ></iframe>
              </div>
              <div className="embed-fall">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/aSugSGCC12I?start=55"
                  title="vídeo 2"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  referrerPolicy="strict-origin-when-cross-origin"
                ></iframe>
              </div>
            </div>
          </section>
          <CardAlbum />
          <Audio />
          <CardMusic />
          <Hero
            title="Calendário do dia em que comecei a fazer este site"
            subtitle="Espero que goste deste presente."
          />
          <Calendar />
          <About
            title="Sobre Soso Caetano"
          />
          <Footer />
        </>
      )}
    </>
  );
}
