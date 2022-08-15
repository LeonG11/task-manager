import React from "react";
import Dashboard from "./dashboard";
import Menu from "./Menu";
import Profile from "./Profile";

function Main() {
  return (
    <div className="pages">
      <Menu />
      <Dashboard />
      <Profile />
    </div>
  );
}

export default Main;
