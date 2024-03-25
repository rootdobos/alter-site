import "./alter.styles.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useContext } from "react";
import { AppDataContext } from "../../../contexts/app-data/app-data.context";
import { useViewport } from "react-viewport-hooks";
import WorkShopCard from "../../../components/workshop-card/workshop-card.component";
import HistoryParallax from "../../../components/history-parallax/history-parallax.compoment";
import { splitStringUsingRegex } from "../../../utils/ui/motion-helper";
import { motion, stagger } from "framer-motion";
const Alter = () => {
  const { eventDetails } = useContext(AppDataContext);
  const { vw } = useViewport();
  const scale = 0.7;
  const charVariants = {
    hidden: { opacity: 0 },
    reveal: { opacity: 1 },
  };
  const eventData = eventDetails["alter"];
  const workshops = eventData && eventData["workshops"];
  const splittedDescription = splitStringUsingRegex(eventData?.description);
  return (
    <>
      {eventData && (
        <div className="event-details-container">
          <motion.h3
            initial={{ opacity: 0.2, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 200,
              duration: 1,
              delay: 0.1,
            }}
            viewport={{ once: true }}
          >
            {eventData.title}
          </motion.h3>
          <motion.p
            initial="hidden"
            whileInView="reveal"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.01, delayChildren: 1.1 }}
          >
            {splittedDescription.map((char) => (
              <motion.span
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                variants={charVariants}
                key={char}
              >
                {char}
              </motion.span>
            ))}
          </motion.p>
          <Carousel
            className="event-detail-carousel"
            infiniteLoop={true}
            autoPlay={true}
            showThumbs={false}
            showStatus={false}
          >
            {eventData.imageUrl.map((image, index) => (
              <div>
                <img src={image} alt={eventData.title + index} />
              </div>
            ))}
          </Carousel>
          <h3>Műhelyek</h3>
          <motion.div className="workshop-container"
           transition={{ staggerChildren: 0.01}}>
            {workshops.map((w, i) => (
              <WorkShopCard key={i} workshop={w} />
            ))}
          </motion.div>
          <div className="history">
            <h3>Története</h3>
            <HistoryParallax history={eventData.history} />
          </div>
          <div className="videos">
            <iframe
              width={vw * scale}
              height={vw * (9 / 16) * scale}
              src="https://www.youtube.com/embed/bD0jeRGMiaI?si=BkHkwKYC7ngBWIvw"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
};
export default Alter;
