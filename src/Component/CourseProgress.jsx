import React, { useState } from "react";
import CircleProgress from "./CircleProgress";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function CourseProgress(props) {
  return (
    <div className="CourseProgress__block">
      <CircleProgress value={props.value} className="CourseProgress__block__circle" />
      <div className="CourseProgress__block__head">
        <div>{props.name}</div>
        <div>{props.lessons}</div>
      </div>
      <button className="CourseProgress__block__btn">
        <ArrowForwardIosIcon fontSize="small" />
      </button>
    </div>
  );
}
