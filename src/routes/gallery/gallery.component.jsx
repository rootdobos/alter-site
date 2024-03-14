import mockGallery from "../../mock-gallery.json";

const Gallery = () => {
  return (
    <div className="gallery-item">
      {mockGallery.map((item) => (
        <img src={item.imageUrl} key={item.id} alt=""/>
      ))}
    </div>
  );
};

export default Gallery;
