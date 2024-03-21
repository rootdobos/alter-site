import "./alter.styles.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useContext } from "react";
import { AppDataContext } from "../../../contexts/app-data/app-data.context";
import { useViewport } from "react-viewport-hooks";
import WorkShopCard from "../../../components/workshop-card/workshop-card.component";
const Alter = () => {
  const { eventDetails } = useContext(AppDataContext);
  const { wh, vw } = useViewport();
  const scale = 0.7;
  const eventData = eventDetails["alter"];
  const workshops = eventData && eventData["workshops"];
  // return (
  //   <>
  //     {eventData && (
  //       <Parallax
  //         pages={2}
  //         style={{ top: "0", left: "0" }}
  //         className="event-details-container"
  //       >
  //         <ParallaxLayer offset={0} speed={1}>
  //           <h3>{eventData["title"]}</h3>
  //         </ParallaxLayer>
  //         <ParallaxLayer offset={0} speed={1}>
  //           <p>{eventData["description"]}</p>
  //         </ParallaxLayer>
  //       </Parallax>
  //     )}
  //   </>
  // );
  return (
    <>
      {eventData && (
        <div className="event-details-container">
          <h3>{eventData.title}</h3>
          <p>{eventData.description}</p>
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
          <div className="workshop-container">
            {workshops.map((w, i) => (
              <WorkShopCard key={i} workshop={w} />
            ))}
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
