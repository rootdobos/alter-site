const EventListItem = ({ eventListItem }) => {
  const { title, imageUrl, description } = eventListItem;
  return (
    <div className="event-list-item">
      <img src={imageUrl} alt={title} />
      <div className="event-list-item-details">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};
export default EventListItem;
