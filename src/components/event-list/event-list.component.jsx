import mockEvents from "../../mock-events.json";
import EventListItem from "../event-list-item/event-list-item.component";
import "./event-list.styles.scss"
const EventList = () => {
  return (
    <div className="event-list-container">
      {mockEvents.map((eventItem) => (
                <EventListItem key={eventItem.id} eventListItem={eventItem} />


      ))}
    </div>
  );
};
export default EventList;
