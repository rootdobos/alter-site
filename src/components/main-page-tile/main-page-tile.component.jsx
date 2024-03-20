import { Link } from "react-router-dom";
import "./main-page-tile.styles.scss";
import { useNavigate } from "react-router-dom";
const MainPageTile = ({ item, selected, setSelected }) => {
  const navigate = useNavigate();
  const goToPageHandler = () => {
    navigate(item.link);
  };
  const handleMouseEnter = () => {
    setSelected(item.id);
  };

  const handleMouseLeave = () => {
    setSelected("none");
  };
  return (
    <div
      onClick={goToPageHandler}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`main-page-tile ${
        selected !== "none" && selected !== item.id
          ? "unfocused-main-page-tile"
          : ""
      }`}
    >
      <h2>{item.title}</h2>
    </div>
  );
};

export default MainPageTile;
