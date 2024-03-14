import "./event-list-item.styles.scss";
import { Link } from "react-router-dom";

const EventListItem = ({ eventListItem }) => {
  const { title, imageUrl, description } = eventListItem;
  return (
    // <div className="event-list-item">
      <Link className="event-list-item" to={eventListItem.slug}>
        
        <div className="event-list-item-details">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <div className="preview-images">
        {
          imageUrl.map((image)=>(
          <img src={image} alt={title} /> 
          ))
        }
        </div>

        
      </Link>
    // </div>
  );
};
export default EventListItem;
