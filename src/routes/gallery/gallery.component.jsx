import { ImageGallery } from "react-image-grid-gallery";
import "./gallery.styles.scss"
import { useContext } from "react";
import { AppDataContext } from "../../contexts/app-data/app-data.context";
import GalleryTile from "../../components/gallery-tile/gallery-tile.component";
import GalleryTileContainer from "../../components/gallery-tile-container/gallery-tile-container.component";
import { Route,Routes } from "react-router";
const Gallery = () => {

  return <Routes>
  <Route index element={<GalleryTileContainer />} />
  
  <Route path=":slug" element={<GalleryTileContainer />} />
</Routes>

};

export default Gallery;
