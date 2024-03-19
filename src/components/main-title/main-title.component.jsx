import "./main-title.styles.scss";
import videoBg from "../../assets/intro.mp4";
import { Link } from "react-router-dom";

const MainTitle = () => {
  return (
    <div className="main-page-component">
      <video src={videoBg} autoPlay loop muted />
      <div className="main-page-headline">
        <Link className="navlink" to="/main">
          ALTERCREW
        </Link>
      </div>
    </div>
  );
};

export default MainTitle;
