import { useParams } from "react-router-dom";
import mockEvents from "../../mock-events.json";
import "./event-details.styles.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
const EventDetails = () => {
  const { slug } = useParams();
  const eventData = mockEvents.filter((e) => e.slug === slug)[0];
  return (
    <div className="event-details-container">
      <h3>{eventData.title}</h3>
      <p>{eventData.description}</p>
      <Carousel
        className="event-detail-carousel"
        infiniteLoop={true}
        autoPlay={true}
        showThumbs={false}
      >
        {eventData.imageUrl.map((image, index) => (
          <div>
            <img src={image} alt={eventData.title + index} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};
export default EventDetails;
