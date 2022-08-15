import React from "react";

export default function Course(props) {
  return (
    <button className="courseItem">
      <div className="courseItem__name">
        {props.icon}
        <div className="courseItem__row">
          <div>{props.name}</div>
          <div>{props.lesson} занятий</div>
        </div>
      </div>
      <div className="courseItem__start">{props.start}</div>
      <div className="course__rate">{props.rate}</div>
      <div className="course__level">{props.level}</div>
    </button>
  );
}
