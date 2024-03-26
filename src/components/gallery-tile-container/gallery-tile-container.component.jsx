import "./gallery-tile-container.styles.scss";
//import GalleryTile from "../gallery-tile/gallery-tile.component";
import { useParams } from "react-router";
import { AppDataContext } from "../../contexts/app-data/app-data.context";
import { useContext, useState } from "react";
import { getItemBySlug, slugify } from "../../utils/utils";

import GalleryTile from "../gallery-tile/gallery-tile.component";
import { useSwipeable } from "react-swipeable";

const GalleryTileContainer = () => {
  const { gallery } = useContext(AppDataContext);
  const { slug } = useParams();
  const [ openedImage, setOpenedImage ] = useState();
  
  const largeImageViewHandler = (id) => {
    setOpenedImage(id)
  };
  const closeOpenedImage = () => {
    setOpenedImage(undefined)
  };
  const decreaseOpenedImageID=(event)=>{
    
    if(openedImage>0)
    {
      setOpenedImage((x)=>x-1)
    }
    event?.stopPropagation();
  }
  const increaseOpenedImageID=(event)=>{
    
    if(openedImage<items.length-1)
    {
      setOpenedImage((x)=>x+1)
    }
    event?.stopPropagation();
  }
  const swipeHandlers=useSwipeable({
    onSwipedLeft:(e)=> decreaseOpenedImageID(),
    onSwipedRight:(e)=> increaseOpenedImageID(),
  })
  if (gallery.length === 0) {
    return <div className="gallery-tile-container"></div>;
  }
  let items = [];
  items = getItemBySlug(gallery, slug);
  const previousLink = slug ? `${slug}-` : "";
  //return <></>
  return (
    <>
      {openedImage!==undefined && <div className="opened-image" onClick={closeOpenedImage}>
        <button onClick={decreaseOpenedImageID}>{"<"}</button>
        <img {...swipeHandlers} src={items[openedImage]} alt="" />
        <button onClick={increaseOpenedImageID}>{">"}</button>
        </div>}

      <div className="gallery-tile-container">
        {items.map((item, index) => {
          let props = {
            data: item,
          };
          if (item.title) {
            props = {
              ...props,
              innerlink: previousLink + slugify(item.title),
            };
          }
          return (
            <GalleryTile
              id={index}
              {...props}
              viewHandler={largeImageViewHandler}
            />
          );
        })}
      </div>
    </>
  );
};
export default GalleryTileContainer;
