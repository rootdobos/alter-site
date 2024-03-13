import { Route,Routes } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import MainPage from "./routes/main-page/main-page.component";
import Events from "./routes/events/events.components";
import Gallery from "./routes/gallery/gallery.component";
import AboutUs from "./routes/about-us/about-us.component";

const App=()=> {
  return (
    <Routes>
      <Route path="/" element={<Navigation/>}>
        <Route index element={<MainPage />} />
        <Route path="events/*" element={< Events/>} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="aboutus" element={<AboutUs />} />
      </Route>
    </Routes>
  );
}

export default App;
