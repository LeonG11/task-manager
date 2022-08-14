import React from "react";
import Navlink from "./Navlink";
import CourseCarousel from './CourseCarousel';

export default function Dashboard() {
  return (
    <div className="dashboard">
      <Navlink name="Главная" />
      <CourseCarousel/>
    </div>
  );
}
