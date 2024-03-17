import mockGallery from "../../mock-gallery.json";
import { ImageGallery } from "react-image-grid-gallery";
import "./gallery.styles.scss"
const Gallery = () => {
  const photos = mockGallery.map((item, i) => ({
    src: item.imageUrl,
    alt: `Image ${i + 1}`,
  }));
  console.log(photos);
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
