import "./workshop-card.styles.scss";
import { motion } from "framer-motion";
const WorkShopCard = ({ workshop }) => {
  return (
    <motion.div
      className="workshop-card"
      initial={{ opacity: 0,scale:0 }}
      whileInView={{ opacity: 1 ,scale:1}}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: 0.5
      }}
    >
      <img src={workshop.image} alt="" />
      <h4>{workshop.title}</h4>
    </motion.div>
  );
};

export default WorkShopCard;
