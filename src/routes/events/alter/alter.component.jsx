import "./alter.styles.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useContext } from "react";
import { AppDataContext } from "../../../contexts/pages/app-data.context";
const Alter = ()=>{
    const {eventDetails}=useContext(AppDataContext);
    const eventData=eventDetails["alter"]
    return (<>
     {eventData &&( <div className="event-details-container">
        <h3>{eventData.title}</h3>
        <p>{eventData.description}</p>
        <Carousel
          className="event-detail-carousel"
          infiniteLoop={true}
          autoPlay={true}
          showThumbs={false}
          showStatus={false}
        >
          {eventData.imageUrl.map((image, index) => (
            <div>
              <img src={image} alt={eventData.title + index} />
            </div>
          ))}
        </Carousel>
      </div>)}
      </>);
}
export default Alter