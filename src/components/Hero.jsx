import React from 'react'

export default function Hero({ title, subtitle }) {
  return (
    <header className="hero">
      <div className="hero-content">
        <h1 className="main-title">{title}</h1>
        <p className="subtitle">{subtitle}</p>
      </div>
    </header>
  )
}

