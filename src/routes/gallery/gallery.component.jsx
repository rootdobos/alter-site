import { ImageGallery } from "react-image-grid-gallery";
import "./gallery.styles.scss"
import { useContext } from "react";
import { AppDataContext } from "../../contexts/app-data/app-data.context";
const Gallery = () => {

  const {gallery}= useContext(AppDataContext);
  const photos = gallery.map((item, i) => ({
    src: item.imageUrl,
    alt: `Image ${i + 1}`,
  }));
  return (
    <div className="gallery-item">
      <ImageGallery imagesInfoArray={photos} 
      columnWidth={530} gapSize={36}
      />
      {/* {mockGallery.map((item) => (
        <img src={item.imageUrl} key={item.id} alt="" />
      ))} */}
    </div>
  );
};

export default Gallery;
