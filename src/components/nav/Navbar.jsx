import React, { useState, useEffect } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const close = () => setOpen(false)
    window.addEventListener('hashchange', close)
    return () => window.removeEventListener('hashchange', close)
  }, [])

  const go = (hash) => {
    window.location.hash = hash
    setOpen(false)
  }

  return (
    <nav className="navbar">
      <div className="container nav-inner">
        <div className="nav-brand" onClick={() => go('#/')}>Pagina da Soso</div>
        <div className="nav-links">
          <button className="nav-link" onClick={() => go('#/reclamacoes')}>Reclamações</button>
        </div>
        <button className="nav-burger" onClick={() => setOpen(true)} aria-label="Abrir menu">☰</button>
      </div>
      {open && (
        <>
          <div className="nav-overlay" onClick={() => setOpen(false)}></div>
          <div className="nav-drawer">
            <button className="nav-link" onClick={() => go('#/reclamacoes')}>Reclamações</button>
          </div>
        </>
      )}
    </nav>
  )
}
