import { slugify } from "../../utils/utils";
import "./gallery-tile.styles.scss";
import { useNavigate } from "react-router";
const GalleryTile = ({id, data, innerlink,viewHandler }) => {
  const navigate = useNavigate();
  const goToGalleryHandler = () => {
    navigate(`/gallery/${innerlink}`);
  };
  const onImageClickHandler=()=>{
    viewHandler(id)
  }
  return (
    <>
      {data.title ? (
        <div className="gallery-tile menu-gallery-tile" onClick={goToGalleryHandler}>
          <img src={data.tumblr} className="img-bg" alt="" />
          <h4>{data.title}</h4>
        </div>
      ) : (
        <div className="gallery-tile" onClick={onImageClickHandler}>
          <img src={data} className="img-bg" alt="" />
        </div>
      )}
    </>
  );
};

export default GalleryTile;
