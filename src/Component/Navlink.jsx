import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

export default function Navlink(props) {
  return (
    <div className="navlink">
      <h1 className="navlink__header">{props.name}</h1>
      <div className="navlink__button">
        <input
          type="text"
          className="navlink__search"
          placeholder="Поиск курса"
        ></input>
        <button>
          <NotificationsNoneIcon />
        </button>
      </div>
    </div>
  );
}
