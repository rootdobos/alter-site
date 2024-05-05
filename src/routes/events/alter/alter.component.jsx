import "./alter.styles.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useContext } from "react";
import { AppDataContext } from "../../../contexts/app-data/app-data.context";
import { useViewport } from "react-viewport-hooks";
import WorkShopCard from "../../../components/workshop-card/workshop-card.component";
import HistoryParallax from "../../../components/history-parallax/history-parallax.compoment";
import { splitStringUsingRegex } from "../../../utils/ui/motion-helper";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";
const Alter = () => {
  const { eventDetails } = useContext(AppDataContext);
  const { vw } = useViewport();
  const scale = 0.7;
  const charVariants = {
    hidden: { opacity: 0 },
    reveal: { opacity: 1 },
  };

  const [openedWorkShop, setOpenedWorkShop] = useState();
  const closeOpenedWorkShop = () => {
    setOpenedWorkShop(undefined);
  };
  const workshopViewHandler = (workshop) => {
    setOpenedWorkShop(workshop);
  };
  const eventData = eventDetails["alter"];
  const workshops = eventData && eventData["workshops"];
  const history = eventData && eventData["history"];
  const thumbnails = eventData && eventData["thumbnails"];
  const splittedDescription = splitStringUsingRegex(eventData?.description);
  return (
    <>
      <AnimatePresence>
        {openedWorkShop !== undefined && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="opened-workshop"
            onClick={closeOpenedWorkShop}
          >
            <X
              className="close-button"
              size={30}
              onClick={closeOpenedWorkShop}
            />
            <div className="opened-workshop-title">
              <img
                src={openedWorkShop["image"]}
                alt={openedWorkShop["title"]}
              />
              <h3>{openedWorkShop["title"]}</h3>
            </div>

            <p>{openedWorkShop["description"]}</p>
            <div className="instructors-container">
              {openedWorkShop["instructor"].map((instructor, index) => (
                <div className="instructor">
                  <img src={instructor["image"]} alt="" />
                  <h4>{instructor["name"]}</h4>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {eventData && (
        <div className="event-details-container">
          <motion.h3
            initial={{ opacity: 0.2, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 50,
              duration: 1,
              delay: 0.1,
            }}
            viewport={{ once: true }}
          >
            {eventData.title}
          </motion.h3>
          <motion.p
            className="description"
            initial="hidden"
            whileInView="reveal"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.01, delayChildren: 1.1 }}
          >
            {splittedDescription.map((char, i) => (
              <motion.span
                key={`${char}${i}`}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                variants={charVariants}
              >
                {char}
              </motion.span>
            ))}
          </motion.p>
          <div className="template-images">
            {thumbnails.map((t, i) => (
              <motion.img
                initial={{
                  y: 100,
                  opacity: 0,
                  scale: 0.5,
                }}
                whileInView={{
                  y: 0,
                  opacity: 1,
                  scale: 1,
                  transition: {
                    type: "spring",
                    bounce: 0.4,
                    duration: 1,
                  },
                }}
                viewport={{ once: true, amount: 0.8 }}
                src={t}
                alt="thumbnail"
                id={i}
              />
            ))}
          </div>
          <h3>Műhelyek</h3>
          <motion.div
            className="workshop-container"
            transition={{ staggerChildren: 0.01 }}
          >
            {workshops.map((w, i) => {
              return (
                <WorkShopCard
                  key={i}
                  workshop={w}
                  viewHandler={workshopViewHandler}
                />
              );
            })}
          </motion.div>

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
          <div className="history">
            <h3>Története</h3>
            <HistoryParallax history={history} />
          </div>
        </div>
      )}
    </>
  );
};
export default Alter;
