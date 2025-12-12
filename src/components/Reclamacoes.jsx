import React, { useState } from "react";

export default function Reclamacoes() {
  const [nome, setNome] = useState("");
  const [texto, setTexto] = useState("");
  const NUMBER = "5511975656474";
  const [isSoso, setIsSoso] = useState(false);
  const [sentMsg, setSentMsg] = useState("");

  const enviar = () => {
    const trimmed = (nome || "").trim();
    const startsWithS = trimmed[0]?.toLowerCase() === "s";
    if (!startsWithS) {
      alert("voce é msm a soso?");
    } else {
      setIsSoso(true);
    }
    const msg = `Reclamação de ${nome || "Anônimo"}: ${texto}`;
    const url = `https://wa.me/${NUMBER}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
    setSentMsg(
      "Mensagem enviada. Que site lindo, meu amor — já podemos casar e viver felizes para sempre."
    );
  };

  return (
    <section className="reclamacoes love-bg">
      <div className="container">
        <h2 className="love-title">Reclamações</h2>
        <div className="love-card">
          <input
            type="text"
            placeholder="Seu nome"
            value={nome}
            onChange={(e) => {
              const v = e.target.value;
              setNome(v);
              const starts = v.trim()[0]?.toLowerCase() === "s";
              setIsSoso(starts);
            }}
            className="love-input"
          />
          <textarea
            placeholder="Sua reclamação"
            value={texto}
            onChange={(e) => setTexto(e.target.value)}
            rows={5}
            className="love-input"
          />
          {isSoso && <div className="love-note">sabia que era voce</div>}
          <button className="btn-love" onClick={enviar}>
            Enviar pelo WhatsApp
          </button>
          {sentMsg && <div className="sent-note">{sentMsg}</div>}
        </div>
      </div>
    </section>
  );
}
