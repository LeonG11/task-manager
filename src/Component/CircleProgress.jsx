import React, { useState } from "react";

function setProgress(percent, radius) {
  const offset =
    2 * Math.PI * radius - (percent / 100) * (2 * Math.PI * radius);
  return offset;
}

export default function CircleProgress(props) {
  const [radius, setRadius] = useState(20);
  const [circleReference, setCircleReference] = useState(2 * Math.PI * radius);
  const [percent, setPercent] = useState(parseInt(props.value));
  return (
    <div className="progress__ring">
      <svg className="progress-ring" width="100" height="100">
        <circle
          stroke="black"
          strokeWidth="4"
          cx="50"
          cy="50"
          r={radius}
          fill="transparent"
        />
        <circle
          className="progress__ring__circle"
          stroke="red"
          strokeWidth="4"
          cx="50"
          cy="50"
          r={radius}
          fill="transparent"
          strokeDashoffset={setProgress(percent, radius)}
          strokeDasharray={`${circleReference} ${circleReference}`}
        />
      </svg>
    </div>
  );
}
