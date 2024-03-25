import { useScroll, useSpring, motion, useTransform } from "framer-motion";
import "./history-parallax.styles.scss";
import HistoryPanel from "./history-panel/history-panel.component";
import { useRef, useState, useEffect } from "react";

const HistoryParallax = ({ history }) => {
  const containerRef = useRef(null);
  const parallaxRef=useRef(null);
  const { scrollYProgress } = useScroll({
    container: parallaxRef,
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
        const tolerance=200;
      const elementTop = window.innerHeight; // Adjust as needed
      if (
        !isVisible.current &&
        containerRef.current &&
        ((containerRef.current.getBoundingClientRect().top <= elementTop &&containerRef.current.getBoundingClientRect().top >=elementTop-tolerance)||
          (containerRef.current.getBoundingClientRect().bottom >= 0 &&
            containerRef.current.getBoundingClientRect().bottom <= tolerance)
        )
      ) {
        setIsVisible(true)
      }
      else if(isVisible && (containerRef.current.getBoundingClientRect().top>elementTop ||containerRef.current.getBoundingClientRect().bottom <0))
      {
        setIsVisible(false)
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isVisible]);
  useEffect(() => {
    if (isVisible && containerRef.current) {
      containerRef.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }
  }, [isVisible]);

  return (
    <div ref={containerRef} className="history-parallax-container">
      <div ref={parallaxRef} className="history-parallax">
        {history.map((year) => (
          <HistoryPanel data={year} />
        ))}
      </div>
      <motion.div className="progress-bar" style={{ scaleX }} />
    </div>
  );
};

export default HistoryParallax;
