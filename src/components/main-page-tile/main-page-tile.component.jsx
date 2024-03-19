import { Link } from "react-router-dom";
import "./main-page-tile.styles.scss";
import { useNavigate } from "react-router-dom";
const MainPageTile = ({ item }) => {
  const navigate = useNavigate();
  const goToPageHandler = () => {
    navigate(item.link);
  };
  return (
    <div onClick={goToPageHandler} className="main-page-tile">
      <h2>{item.title}</h2>
    </div>
  );
};

export default MainPageTile;
