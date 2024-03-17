import mockGallery from "../../mock-gallery.json";

const Gallery = () => {
  const photos=mockGallery.map((item,i)=>(
    {src:item.imageUrl, alt:`Image ${i + 1}`}
  ))
  console.log(photos)
  return (
    <div className="gallery-item">
      {mockGallery.map((item) => (
        <img src={item.imageUrl} key={item.id} alt=""/>
      ))}
    </div>
  );
};

export default Gallery;
