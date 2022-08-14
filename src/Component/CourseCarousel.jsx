import React from "react";

export default function CourseCarousel() {
  return (
    <div className="courseCarousel">
      <h2 className="courseCarousel__header">Новые курсы</h2>
      <div className="courseCarousel__carousel">
        <button className="courseCarousel__item">
          <img src="./assets/globe.png" alt="" className="courseCarousel__img" />
          <div className="courseCarousel__name">География</div>
          <div className="courseCarousel__numberClasses">12 занятий</div>
        </button>
        <button className="courseCarousel__item">
          <img src="./assets/java-script.png" alt="" className="courseCarousel__img" />
          <div className="courseCarousel__name">JavaScript</div>
          <div className="courseCarousel__numberClasses">15 занятий</div>
        </button>
        <button className="courseCarousel__item">
          <img src="./assets/tripod.png" alt="" className="courseCarousel__img" />
          <div className="courseCarousel__name">Фотографирование</div>
          <div className="courseCarousel__numberClasses">12 занятий</div>
        </button>
      </div>
    </div>
  );
}
