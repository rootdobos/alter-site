import "./event-list-item.styles.scss";
import { Link } from "react-router-dom";

const EventListItem = ({ eventListItem,colorStyle }) => {
  const { title, imageUrl, description } = eventListItem;
  return (
    // <div className="event-list-item">
      <Link className={"event-list-item "+ colorStyle} to={eventListItem.slug}>
        
        <div className="event-list-item-details ">
          <h3>{title}</h3>
          <p>{description}</p>

        <div className="preview-images">
        {
          imageUrl.map((image)=>(
          <img src={image} alt={title} /> 
          ))
        }
        </div>
        </div>
        
      </Link>
    // </div>
  );
};
export default EventListItem;
