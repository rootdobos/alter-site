import "./main-title.styles.scss";
import videoBg from "../../assets/alter_intro.mp4";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const MainTitle = () => {
  return (
    <div className="main-page-component">
      <motion.video
        // src="https://storage.googleapis.com/altercrew/assets/alter_intro.mp4"
        src={videoBg}
        autoPlay
        loop
        muted
        disablePictureInPicture
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 3, ease: "easeOut" }}
      />
      <motion.div
        className="main-page-headline"
        initial={{ opacity: 0}}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay:3.5 }}
      >
        <Link className="navlink" to="/main">
          ALTERCREW
        </Link>
      </motion.div>
    </div>
  );
};

export default MainTitle;
