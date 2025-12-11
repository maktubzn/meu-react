import React, { useEffect, useMemo, useState } from "react";

export default function CalendarComponent({ onSelect }) {
  const now = new Date()
  const [year, setYear] = useState(now.getFullYear())
  const [month, setMonth] = useState(11)
  const [selected, setSelected] = useState(new Date(year, month, 11))

  const firstDay = useMemo(() => new Date(year, month, 1), [year, month])
  const daysInMonth = useMemo(() => new Date(year, month + 1, 0).getDate(), [year, month])
  const startWeekday = useMemo(() => firstDay.getDay(), [firstDay])

  const prevMonth = () => {}

  const nextMonth = () => {}

  const handleSelect = (d) => {
    const date = new Date(year, month, 11)
    setSelected(date)
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
          <button className="cal-btn" onClick={prevMonth} disabled>◀</button>
          <div className="cal-title">{monthNames[month]} {year}</div>
          <button className="cal-btn" onClick={nextMonth} disabled>▶</button>
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
      </div>
    </section>
  )
}
