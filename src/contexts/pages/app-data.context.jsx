import { createContext, useEffect, useReducer } from "react";
import { createAction } from "../../utils/reducer/reducer.utils";
import localPages from "../../pages.json";
import localEventDetails from "../../mock-events.json";
export const AppDataContext = createContext({
  pages: [],
  setPages: () => {},
  eventDetails: {},
  setEventDetails: () => {},
});
const INITIAL_STATE = {
  pages: [],
  eventDetails:{},
};
const APPDATA_ACTION_TYPES = {
  SET_PAGES: "SET_PAGES",
  SET_EVENTDETAILS: "SET_EVENTDETAILS",
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
    default:
      throw new Error(`Unhandled type ${type} in appdataReducer`);
  }
};

export const AppDataProvider = ({ children }) => {
  const [{ pages,eventDetails }, dispatch] = useReducer(appDataReducer, INITIAL_STATE);
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
  useEffect(() => {
    const getAppData = async () => {
      const pages = localPages;
      setPages(pages);
      const eventDetails=localEventDetails;
      setEventDetails(eventDetails);
      console.log("effect used")
    };
    getAppData();
  }, []);

  const value = {
    pages,
    setPages,
    eventDetails,
    setEventDetails
  };
  return (
    <AppDataContext.Provider value={value}>{children}</AppDataContext.Provider>
  );
};
