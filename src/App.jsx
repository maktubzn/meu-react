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

export default function App() {
  const [route, setRoute] = useState(window.location.hash || "#/")
  useEffect(() => {
    const onHash = () => setRoute(window.location.hash || "#/")
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])
  return (
    <>
      <Navbar />
      <BackgroundCanvas />
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
            <div className="embed-wrapper">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/aSugSGCC12I?si=J-PzdqDO7XwfiJtF&amp;start=10"
                 title="vídeo de exemplo"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
              ></iframe>
            </div>
          </section>
          <CardAlbum />
          <Audio />
          <CardMusic />
          <Hero
            title="Calendario do dia que comecei a fazer esse site"
            subtitle="Espero que goste desse presente."
          />
          <Calendar />
          <About
            title="Sobre Soso Caetano"
          />
        </>
      )}
    </>
  );
}
