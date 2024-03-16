import mockEvents from "../../mock-events.json";
import EventListItem from "../event-list-item/event-list-item.component";
import "./event-list.styles.scss"
const EventList = () => {
  return (
    <div className="event-list-container">
      {mockEvents.map((eventItem,index) => (
                <EventListItem key={eventItem.id} eventListItem={eventItem} colorStyle={((index%2===0) ? 'black' : 'white')+"-event-list-item"}/>


      ))}
    </div>
  );
};
export default EventList;
