import "./main-title.styles.scss";
import videoBg from "../../assets/intro.mp4";
const MainTitle = () => {
  return (
    <div className="main-page-component">
      <div className="main-page-overlay"></div>

      <video src={videoBg} autoPlay loop muted />
      <div className="main-page-headline">
        <h2>ALTERCREW</h2>
      </div>
    </div>
  );
};

export default MainTitle;
