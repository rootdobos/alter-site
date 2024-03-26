import { slugify } from "../../utils/utils";
import "./gallery-tile.styles.scss";
import { useNavigate } from "react-router";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import SkewLoader from "react-spinners/SkewLoader";

import { motion } from "framer-motion";

const cardVariants = {
  offscreen: {
    y: 100,
    opacity:0,
    scale:0.5
  },
  onscreen: {
    y: 0,
    opacity:1,
    scale:1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.5,
    },
  },
};

const GalleryTile = ({ id, data, innerlink, viewHandler }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const goToGalleryHandler = () => {
    navigate(`/gallery/${innerlink}`);
  };
  const onImageClickHandler = () => {
    viewHandler(id);
  };
  const onImageLoaded = () => {
    setLoading(false);
  };
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
      variants={cardVariants}
    >
      {data.title ? (
        <div
          ref={ref}
          className="gallery-tile menu-gallery-tile"
          onClick={goToGalleryHandler}
        >
          {inView ? (
            <>
              <img src={data.tumblr} className="img-bg" alt="" />
              <h4>{data.title}</h4>
            </>
          ) : (
            <>
              <h4>LOADING</h4>
            </>
          )}
        </div>
      ) : (
        <div ref={ref} className="gallery-tile" onClick={onImageClickHandler}>
          {inView ? (
            <>
              <div style={{ display: loading ? "block" : "none" }}>
                <SkewLoader
                  color={"#E0F1F8"}
                  loading={loading}
                  size={30}
                  aria-label="Loading Spinner"
                  data-testid="loader"
                />
              </div>
              <img
                src={data + `?${id}`}
                className="img-bg"
                alt=""
                onLoad={onImageLoaded}
                style={{ display: loading ? "none" : "block" }}
              />
            </>
          ) : (
            <>
              <h4>LOADING</h4>
            </>
          )}
        </div>
      )}
    </motion.div>
  );
};

export default GalleryTile;
