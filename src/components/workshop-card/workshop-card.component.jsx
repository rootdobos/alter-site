import "./workshop-card.styles.scss";

const WorkShopCard = ({ workshop }) => {
  return (
    <div className="workshop-card">
      <img src={workshop.image} alt="" />
      <h4>{workshop.title}</h4>
    </div>
  );
};

export default WorkShopCard;
