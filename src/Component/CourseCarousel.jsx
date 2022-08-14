import React from "react";
import Course from "./Course";

export default function CourseCarousel() {
  return (
    <div className="courseCarousel">
      <h2 className="courseCarousel__header">Новые курсы</h2>
      <div className="courseCarousel__carousel">
        <button className="courseCarousel__item" id="item1">
          <div className="red">
            <img
              src="./assets/globe.png"
              alt=""
              className="courseCarousel__img"
            />
          </div>
          <div className="courseCarousel__name">География</div>
          <div className="courseCarousel__numberClasses">12 занятий</div>
        </button>
        <button className="courseCarousel__item" id="item2">
          <div className="blue">
            <img
              src="./assets/java-script.png"
              alt=""
              className="courseCarousel__img"
            />
          </div>
          <div className="courseCarousel__name">JavaScript</div>
          <div className="courseCarousel__numberClasses">15 занятий</div>
        </button>
        <button className="courseCarousel__item" id="item3">
          <div className="orange">
            <img
              src="./assets/tripod.png"
              alt=""
              className="courseCarousel__img"
            />
          </div>
          <div className="courseCarousel__name">Фотографирование</div>
          <div className="courseCarousel__numberClasses">12 занятий</div>
        </button>
      </div>
      <div className="course">
        <div className="course__header">
          <h2>Мои курсы</h2>
          <a href="#">все курсы</a>
        </div>
        <div className="course__grid">
            <div className="course__grid__name">Название курса</div>
            <div className="course__grid__start">Начало</div>
            <div className="course__grid__rate">Рейтинг</div>
            <div className="course__grid__level">Уровень</div>
            <Course name="Web Design" lesson="10" start="12 Мая" rate="4.8" level="Начинающий" />
        </div>
      </div>
    </div>
  );
}
