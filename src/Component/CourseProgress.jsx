import React, { useState } from "react";
import CircleProgress from "./CircleProgress";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function CourseProgress(props) {
  return (
    <button className="CourseProgress__block">
      <CircleProgress
        percent={props.value}
        className="CourseProgress__block__circle"
      />
      <div className="CourseProgress__header">
        <div className="CourseProgress__block__head">
          <div className="CourseProgress__block__name">{props.name}</div>
          <div className="CourseProgress__block__lesson">{`${parseInt(props.lesson)} занятий`}</div>
        </div>
      </div>
      <button className="CourseProgress__block__btn">
        <ArrowForwardIosIcon fontSize="small" />
      </button>
    </button>
  );
}
