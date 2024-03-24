import "./alterzone.styles.scss"
import { AppDataContext } from "../../../contexts/app-data/app-data.context";
import { useContext } from "react";
import { Carousel } from "react-responsive-carousel";
const AlterZone= ()=>{
    const { eventDetails } = useContext(AppDataContext);
    const eventData = eventDetails["alterzone"];
    return <>
    {eventData && (
      <div className="event-details-container">
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
            {
                eventData.programs.map((program)=>(
                    <div>
                        <h4>{program.title}</h4>
                        <img src={program.image} alt={program.title} />
                        <p>{program.description}</p>
                        
                    </div>
                ))
            }
      </div>
    )}
  </>
}
export default AlterZone