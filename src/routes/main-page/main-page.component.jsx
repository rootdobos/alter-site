
import "./main-page.styles.scss"
//import pages from "../../pages.json";
import MainPageTile from "../../components/main-page-tile/main-page-tile.component";
import { useState,useContext } from "react";
import { AppDataContext } from "../../contexts/pages/app-data.context";
const MainPage=()=>{
    const {pages}=useContext(AppDataContext)
    const [selected,setSelected]=useState("none");
    return (
        <div className="main-page">
             {pages.map((page, index) => (
        <MainPageTile
          key={page.id}
          item={page}
          selected={selected}
          setSelected={setSelected}
        />
      ))}

        </div>
    )
}

export default MainPage