import { useState } from "react";
export default function DataPicker() {
  const [currentDate, setCurrentDate] = useState(new Date());

  return (
    <div className="dataPicker">
      <div className="dataPicker__head">
        <div className="month">{currentDate.getMonth().toString()}</div>
        <button className="dataPicker__btn" onClick={()=>setCurrentDate(Date().setDate(1))}></button>
        <button className="dataPicker__btn">-</button>
      </div>
      <div className="dataPicker__grid">
        <div className="dataPicker__grid__dayOftheWeek">
          <div>Пн</div>
          <div>Вт</div>
          <div>Ср</div>
          <div>Чт</div>
          <div>Пт</div>
          <div>Сб</div>
          <div>Вс</div>
        </div>
        <div className="dataPicker__grid__day">
          <button id="day1" className="day"></button>
          <button id="day2" className="day"></button>
          <button id="day3" className="day"></button>
          <button id="day4" className="day"></button>
          <button id="day5" className="day"></button>
          <button id="day6" className="day"></button>
          <button id="day7" className="day"></button>
          <button id="day8" className="day"></button>
          <button id="day9" className="day"></button>
          <button id="day10" className="day"></button>
          <button id="day11" className="day"></button>
          <button id="day12" className="day"></button>
          <button id="day13" className="day"></button>
          <button id="day14" className="day"></button>
          <button id="day15" className="day"></button>
          <button id="day16" className="day"></button>
          <button id="day17" className="day"></button>
          <button id="day18" className="day"></button>
          <button id="day19" className="day"></button>
          <button id="day20" className="day"></button>
          <button id="day21" className="day"></button>
          <button id="day22" className="day"></button>
          <button id="day23" className="day"></button>
          <button id="day24" className="day"></button>
          <button id="day25" className="day"></button>
          <button id="day26" className="day"></button>
          <button id="day27" className="day"></button>
          <button id="day28" className="day"></button>
          <button id="day29" className="day"></button>
          <button id="day30" className="day"></button>
          <button id="day31" className="day"></button>
          <button id="day32" className="day"></button>
          <button id="day33" className="day"></button>
          <button id="day34" className="day"></button>
          <button id="day35" className="day"></button>
        </div>
      </div>
    </div>
  );
}
