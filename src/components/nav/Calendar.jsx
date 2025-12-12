import React, { useEffect, useMemo, useState } from "react";

export default function CalendarComponent({ onSelect }) {
  const now = new Date()
  const [year, setYear] = useState(now.getFullYear())
  const [month, setMonth] = useState(11)
  const [selected, setSelected] = useState(new Date(year, month, 11))
  const [modal, setModal] = useState(false)

  const firstDay = useMemo(() => new Date(year, month, 1), [year, month])
  const daysInMonth = useMemo(() => new Date(year, month + 1, 0).getDate(), [year, month])
  const startWeekday = useMemo(() => firstDay.getDay(), [firstDay])

  const prevMonth = () => {
    setMonth(m => {
      if (m === 0) { setYear(y => y - 1); return 11 }
      return m - 1
    })
  }

  const nextMonth = () => {
    setMonth(m => {
      if (m === 11) {
        setYear(y => y + 1)
        setModal('não insiste eu ainda vou persistir em voce')
        return 0
      }
      return m + 1
    })
  }

  const handleSelect = (d) => {
    if (!d) return
    const date = new Date(year, month, d)
    setSelected(date)
    let msg = ''
    if (d < 11) msg = 'antes desse dia era chatao sem voce'
    else if (d === 11) msg = 'Passei o dia inteiro pensando em como criar isso para te agradar.'
    else msg = 'Agora tudo tem um tom de colorido, onde a cor laranja me fascina, e você é a culpada disso.'
    setModal(msg)
    if (onSelect) onSelect(date)
  }

  useEffect(() => {
    setSelected(new Date(year, month, 11))
  }, [year, month])

  const isToday = (d) => {
    const t = new Date()
    return d === t.getDate() && month === t.getMonth() && year === t.getFullYear()
  }

  const monthNames = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"]
  const weekNames = ["D","S","T","Q","Q","S","S"]

  const cells = []
  for (let i = 0; i < startWeekday; i++) cells.push(null)
  for (let d = 1; d <= daysInMonth; d++) cells.push(d)

  return (
    <section className="calendar">
      <div className="container calendar-container">
        <div className="calendar-header">
          <button className="cal-btn" onClick={prevMonth}>◀</button>
          <div className="cal-title">{monthNames[month]} {year}</div>
          <button className="cal-btn" onClick={nextMonth}>▶</button>
        </div>
        <div className="calendar-week">
          {weekNames.map((w, i) => (
            <div key={i} className="cal-weekday">{w}</div>
          ))}
        </div>
        <div className="calendar-grid">
          {cells.map((d, i) => (
            <button
              key={i}
              className={
                "cal-cell" +
                (d === null ? " empty" : "") +
                (d && isToday(d) ? " today" : "") +
                (d === 11 ? " selected" : "")
              }
              onClick={() => d && handleSelect(d)}
              disabled={d === null}
            >
              {d ?? ""}
            </button>
          ))}
        </div>
        {modal && (
          <div className="cal-modal">
            <div className="cal-modal-card">
              <div className="cal-modal-title">Calendário</div>
              <div className="cal-modal-text">{modal}</div>
              <button className="cal-modal-btn" onClick={() => setModal(false)}>Fechar</button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
