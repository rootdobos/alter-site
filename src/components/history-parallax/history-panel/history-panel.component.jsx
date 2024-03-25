import "./history-panel.styles.scss";
import { useRef } from "react";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import { useParallax } from "../../../utils/ui/motion-helper";
const HistoryPanel = ({ data }) => {
  const ref=useRef(null)
  const  {scrollYProgress}=useScroll({target:ref});
  const y=useParallax(scrollYProgress,300)
  return (
    <motion.div ref={ref}
    initial={{opacity:0,scale:0.5}}
    whileInView={{opacity:1,scale:1}}
    transition={{duration:1}}
    className="history-panel"
    >
        <img src={data.image} alt={data.title} />
        <div className="history-details">
        <h4>{data.title}</h4>
        <p>{data.description}</p>
        </div>


    </motion.div>
  );
};
export default HistoryPanel;
