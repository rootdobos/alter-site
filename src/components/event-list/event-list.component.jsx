import { Link } from "react-router-dom";
import mockEvents from "../../mock-events.json";
import EventListItem from "../event-list-item/event-list-item.component";

const EventList = () => {
  return (
    <div>
      {mockEvents.map((eventItem) => (
        <Link to={eventItem.slug}>
                <EventListItem key={eventItem.id} eventListItem={eventItem} />
        </Link>

      ))}
    </div>
  );
};
export default EventList;
