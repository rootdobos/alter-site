import "./main-page.styles.scss";
//import pages from "../../pages.json";
import MainPageTile from "../../components/main-page-tile/main-page-tile.component";
import { useState, useContext } from "react";
import { AppDataContext } from "../../contexts/app-data/app-data.context";
import { motion } from "framer-motion";
const MainPage = () => {
  const { pages } = useContext(AppDataContext);
  const [selected, setSelected] = useState("none");
  return (
    <motion.div className="main-page"
    initial={{opacity:0}}
    animate={{opacity:1,transition: { duration: 1 } }}
    exit={{opacity:0,transition: { duration: 0.5} }}>
      {pages.map((page, index) => (
        <MainPageTile
          key={page.id}
          item={page}
          selected={selected}
          setSelected={setSelected}
        />
      ))}
    </motion.div>
  );
};

export default MainPage;
