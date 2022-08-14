import React from "react";

export default function Course(props) {
  return (
    <div className="courseItem">
      <div className="courseItem__name">
        <div>{props.name}</div>
        <div>{props.lesson} занятий</div>
      </div>
      <div className="courseItem__start">{props.start}</div>
      <div className="course__rate">{props.rate}</div>
      <div className="course__level">{props.level}</div>
    </div>
  );
}
