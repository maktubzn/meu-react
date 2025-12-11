import React from "react";
import "./CardCss/Music.css";

export default function CardMusic() {
  return (
    <div className="MusicSec container">
      <iframe
        onPointerDown={() => window.dispatchEvent(new Event('external-media-play'))}
        data-testid="embed-iframe"
        style={{ borderRadius: "12px" }}
        src="https://open.spotify.com/embed/track/40bK2uosUmAS92c17n98xd?utm_source=generator"
        width="100%"
        height="152"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
        allowFullScreen
        loading="lazy"
      ></iframe>
      <iframe
        onPointerDown={() => window.dispatchEvent(new Event('external-media-play'))}
        data-testid="embed-iframe"
        style={{ borderRadius: "12px" }}
        src="https://open.spotify.com/embed/track/2psRActEWsTlYYd7EDoyVR?utm_source=generator"
        width="100%"
        height="152"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
        allowFullScreen
        loading="lazy"
      ></iframe>
      <iframe
        onPointerDown={() => window.dispatchEvent(new Event('external-media-play'))}
        data-testid="embed-iframe"
        style={{ borderRadius: "12px" }}
        src="https://open.spotify.com/embed/track/2BwO5K8Q7EPAJSGze3AAh9?utm_source=generator"
        width="100%"
        height="230"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
        allowFullScreen
        loading="lazy"
      ></iframe>
      <iframe
        onPointerDown={() => window.dispatchEvent(new Event('external-media-play'))}
        data-testid="embed-iframe"
        style={{ borderRadius: "12px" }}
        src="https://open.spotify.com/embed/track/2mdEsXPu8ZmkHRRtAdC09e?utm_source=generator"
        width="100%"
        height="352"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
        allowFullScreen
        loading="lazy"
      ></iframe>
    </div>
  );
}
