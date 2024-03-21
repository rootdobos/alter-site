import { createContext, useEffect, useReducer } from "react";
import { createAction } from "../../utils/reducer/reducer.utils";
import localPages from "../../pages.json";
import localEventDetails from "../../mock-events.json";
import localGallery from "../../mock-gallery.json";
export const AppDataContext = createContext({
  pages: [],
  setPages: () => {},
  eventDetails: {},
  setEventDetails: () => {},
  gallery: {},
  setGallery: () => {},
});
const INITIAL_STATE = {
  pages: [],
  eventDetails:{},
  gallery:[]
};
const APPDATA_ACTION_TYPES = {
  SET_PAGES: "SET_PAGES",
  SET_EVENTDETAILS: "SET_EVENTDETAILS",
  SET_GALLERY: "SET_GALLERY",
};
const appDataReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case APPDATA_ACTION_TYPES.SET_PAGES:
      return {
        ...state,
        ...payload,
      };
    case APPDATA_ACTION_TYPES.SET_EVENTDETAILS:
      return {
        ...state,
        ...payload,
      };
      case APPDATA_ACTION_TYPES.SET_GALLERY:
        return {
          ...state,
          ...payload,
        };
    default:
      throw new Error(`Unhandled type ${type} in appdataReducer`);
  }
};

export const AppDataProvider = ({ children }) => {
  const [{ pages,eventDetails,gallery }, dispatch] = useReducer(appDataReducer, INITIAL_STATE);
  const setPages = (newPages) => {
    dispatch(
      createAction(APPDATA_ACTION_TYPES.SET_PAGES, {
        pages: newPages,
      })
    );
  };
  const setEventDetails = (newEventDetails) => {
    dispatch(
      createAction(APPDATA_ACTION_TYPES.SET_EVENTDETAILS, {
        eventDetails: newEventDetails,
      })
    );
  };
  const setGallery = (newGallery) => {
    dispatch(
      createAction(APPDATA_ACTION_TYPES.SET_GALLERY, {
        gallery: newGallery,
      })
    );
  };
  useEffect(() => {
    const getAppData = async () => {
      const pages = localPages;
      setPages(pages);
      const eventDetails=localEventDetails;
      setEventDetails(eventDetails);
      const gallery=localGallery;
      setGallery(gallery);
    };
    getAppData();
  }, []);

  const value = {
    pages,
    setPages,
    eventDetails,
    setEventDetails,
    gallery,
    setGallery
  };
  return (
    <AppDataContext.Provider value={value}>{children}</AppDataContext.Provider>
  );
};
