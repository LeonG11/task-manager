import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import GradeIcon from "@mui/icons-material/Grade";
import RoofingIcon from "@mui/icons-material/Roofing";
import WorkIcon from "@mui/icons-material/Work";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div className="menu">
      <h1 className="menu__header">
        <ElectricBoltIcon />
        <div style={{ marginLeft: "10px" }}>Marble academy</div>
      </h1>
      <ul className="menu__ul">
        <li>
          <Link to="/" className="menu__li">
            <RoofingIcon fontSize="small" />
            <div className="menu__item">Главная</div>
          </Link>
        </li>
        <li>
          <Link to="/course" className="menu__li">
            <WorkIcon fontSize="small" />
            <div className="menu__item">Курсы</div>
          </Link>
        </li>
        <li>
          <Link to="/chats" className="menu__li">
            <ChatBubbleOutlineIcon fontSize="small" />
            <div className="menu__item">Чаты</div>
          </Link>
        </li>
        <li>
          <Link to="/grades" className="menu__li">
            <GradeIcon fontSize="small" />
            <div className="menu__item">Успехи</div>
          </Link>
        </li>
        <li>
          <Link to="/shedule" className="menu__li">
            <CalendarMonthIcon fontSize="small" />
            <div className="menu__item">Календарь</div>
          </Link>
        </li>
      </ul>
      <div className="menu__subscribe">
        <img src="./assets/mood.png" alt="" className="menu__subscribe__img" />
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
