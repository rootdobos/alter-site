import MainTitle from "../../components/main-title/main-title.component"
import "./main-page.styles.scss"
import pages from "../../pages.json";
import MainPageTile from "../../components/main-page-tile/main-page-tile.component";
const MainPage=()=>{
    return (
        <div className="main-page">
             {pages.map((page, index) => (
        <MainPageTile
          key={page.id}
          item={page}
        />
      ))}

        </div>
    )
}

export default MainPage