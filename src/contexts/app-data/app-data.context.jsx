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
  members:[],

});
const INITIAL_STATE = {
  pages: [],
  eventDetails:{},
  gallery:{},
  members:[],
};
const APPDATA_ACTION_TYPES = {
  SET_PAGES: "SET_PAGES",
  SET_EVENTDETAILS: "SET_EVENTDETAILS",
  SET_GALLERY: "SET_GALLERY",
  SET_MEMBERS: "SET_MEMBERS",
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
        case APPDATA_ACTION_TYPES.SET_MEMBERS:
          return {
            ...state,
            ...payload,
          };
    default:
      throw new Error(`Unhandled type ${type} in appdataReducer`);
  }
};

export const AppDataProvider = ({ children }) => {
  const [{ pages,eventDetails,gallery,members }, dispatch] = useReducer(appDataReducer, INITIAL_STATE);
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
  const setMembers = (newMembers) => {
    dispatch(
      createAction(APPDATA_ACTION_TYPES.SET_MEMBERS, {
        members: newMembers,
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
    const getMembers= async()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
      .then(response=> response.json())
      .then((members)=>setMembers(members.map((member)=>{
        return{name:member.name,
        id:member.id,
      email:member.email,
      phone:member.phone,
      position: member.company.catchPhrase,
      image:`https://robohash.org/${member.id}?set=set2&size=180x180`
    }
      } )));
    }
    getAppData();
    getMembers();
  }, []);

  const value = {
    pages,
    setPages,
    eventDetails,
    setEventDetails,
    gallery,
    setGallery,
    members
  };
  return (
    <AppDataContext.Provider value={value}>{children}</AppDataContext.Provider>
  );
};