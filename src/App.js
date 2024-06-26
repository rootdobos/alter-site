import { Route, Routes,useLocation } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import MainPage from "./routes/main-page/main-page.component";
import MainTitle from "./components/main-title/main-title.component";
import Events from "./routes/events/events.components";
import Gallery from "./routes/gallery/gallery.component";
import AboutUs from "./routes/about-us/about-us.component";
import ScrollToTop from "./utils/ui/scrollToTop";
import GalleryPreview from "./routes/gallery-preview/gallery-preview.component";
import Contact from "./routes/contact/contact.component";
import { AnimatePresence } from "framer-motion";

const App = () => {
  const location=useLocation();
  return (
    <>
      <ScrollToTop />
      <AnimatePresence >
      <Routes location={location} key={location.pathname}>
        <Route index element={<MainTitle />} />
        <Route path="main" element={<MainPage />} />
        <Route path="/" element={<Navigation />}>
          <Route path="events/*" element={<Events />} />
          <Route path="gallery/*" element={<Gallery />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="test" element={<GalleryPreview />} />
        </Route>
      </Routes>
      </AnimatePresence>
    </>
  );
};

export default App;
