import React from "react";

export default function CourseProgress(props) {
  return (
    <div>
      <div>
        <div>
          <div id="number">{props.value}</div>
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        width="160px"
        height="160px"
      >
        <defs>
          <linearGradient>
            <stop></stop>
          </linearGradient>
        </defs>
        <circle cx="80" cy="80" r="70" stroke-linecap="round" />
      </svg>
    </div>
  );
}
