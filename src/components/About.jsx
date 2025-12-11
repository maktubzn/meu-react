import React from 'react'

export default function About({ title, text }) {
  return (
    <section className="about">
      <div className="container">
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </section>
  )
}

