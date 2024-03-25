import { useScroll, useSpring, motion, useTransform } from "framer-motion";
import "./history-parallax.styles.scss";
import HistoryPanel from "./history-panel/history-panel.component";
import { useRef, useState } from "react";

const HistoryParallax = ({ history }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    container: containerRef,
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <div className="history-parallax-container">
      <div ref={containerRef} className="history-parallax">
        {history.map((year) => (
          <HistoryPanel data={year} />
        ))}
      </div>
      <motion.div className="progress-bar" style={{ scaleX }} />
    </div>
  );
};

export default HistoryParallax;
