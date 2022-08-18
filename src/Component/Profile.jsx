import React from "react";
import CreateIcon from '@mui/icons-material/Create';
import DataPicker from './DataPicker';

export default function Profile() {
  return (
    <div className="profile">
      <div className="profile__head">
        <h2 className="profile__bold">Профиль</h2>
        <button className="profile__btn"><CreateIcon/></button>
      </div>
      <div className="profile__img">
        <img src="./assets/espresso.png" alt="" />
        <div className="profile__name">Kirill Kachanov</div>
        <div className="profile__status">Advanced</div>
      </div>
    <DataPicker/>
    </div>
  );
}
