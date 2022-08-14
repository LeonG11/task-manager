import { Link } from "react-router-dom";
import React from "react";

function Menu() {
  return (
    <div className="menu">
      <h1 className="menu__header">marble</h1>
      <ul className="menu__ul">
        <li>
          <Link to="/">Главная</Link>
        </li>
        <li>
          <Link to="/course">Курсы</Link>
        </li>
        <li>
          <Link to="/chats">Чаты</Link>
        </li>
        <li>
          <Link to="/grades">Успехи</Link>
        </li>
        <li>
          <Link to="/shedule">Календарь</Link>
        </li>
      </ul>
      <div className="menu__subscribe">
        <img src="" alt="" className="menu__subscribe__img" />
        <div className="menu__subscribe__header">Премиум подписка</div>
        <div className="menu__subscribe__text">
          Купи подписку и получи доступ к новым курсам
        </div>
        <button className="menu__button">Узнать больше</button>
      </div>
    </div>
  );
}

export default Menu;
