import React, { useState } from "react";
import CreateIcon from "@mui/icons-material/Create";
import Calendar from "react-calendar";
import CourseProgress from "./CourseProgress";
import "react-calendar/dist/Calendar.css";

export default function Profile() {
  const [calendarValue, setCalendarValue] = useState(new Date());
  return (
    <div className="profile">
      <div className="profile__head">
        <h2 className="profile__bold">Профиль</h2>
        <button className="profile__btn">
          <CreateIcon />
        </button>
      </div>
      <div className="profile__img">
        <img src="./assets/espresso.png" alt="" />
        <div className="profile__name">Kirill Kachanov</div>
        <div className="profile__status">Advanced</div>
      </div>
      <Calendar onChange={setCalendarValue} value={calendarValue}/>
      <h3 style={{ marginTop: "1rem" }}>Домашнее задание</h3>
      <CourseProgress name="Styling with css" value="90" lesson="12" />
      <CourseProgress name="Basics of programming" value="65" lesson="18" />
      <CourseProgress name="Learn to Programm of Java" value="25" lesson="10" />
    </div>
  );
}
