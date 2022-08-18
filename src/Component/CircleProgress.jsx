import React, { useState } from "react";

function setProgress(percent, radius) {
  const offset =
    2 * Math.PI * radius - (percent / 100) * (2 * Math.PI * radius);
  return offset;
}

export default function CircleProgress(props) {
  const [radius, setRadius] = useState(20);
  const [circleReference, setCircleReference] = useState(2 * Math.PI * radius);
  const [percent, setPercent] = useState(parseInt(props.percent));
  return (
    <div className="progress__ring">
      <svg className="progress-ring" width="100" height="100">
        <circle
          className="progress__ring__circle__back"
          strokeWidth="2"
          cx="50"
          cy="50"
          r={radius}
          fill="transparent"
        />
        <circle
          className="progress__ring__circle__up"
          strokeWidth="2"
          cx="50"
          cy="50"
          r={radius}
          fill="transparent"
          strokeDashoffset={setProgress(percent, radius)}
          strokeDasharray={`${circleReference} ${circleReference}`}
        ></circle>
      </svg>
    </div>
  );
}
