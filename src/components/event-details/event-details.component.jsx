import { useParams } from "react-router-dom";
import mockEvents from "../../mock-events.json";
const EventDetails =()=>{
    const {slug}=useParams();
    const eventData= mockEvents.filter((e)=> e.slug===slug)[0];
return <div className="event-details-container">
    <h3>{eventData.title}</h3>
    <img src={eventData.imageUrl} alt="" />
    <p>{eventData.description}</p>
</div>

}
export default EventDetails