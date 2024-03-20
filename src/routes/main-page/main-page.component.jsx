import MainTitle from "../../components/main-title/main-title.component"
import "./main-page.styles.scss"
import pages from "../../pages.json";
import MainPageTile from "../../components/main-page-tile/main-page-tile.component";
import { useState } from "react";

const MainPage=()=>{
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