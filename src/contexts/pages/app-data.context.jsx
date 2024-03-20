import { createContext, useEffect, useReducer } from "react";
import { createAction } from "../../utils/reducer/reducer.utils";
import localPages from "../../pages.json";
export const AppDataContext = createContext({
  pages: [],
  setPages: () => {},
});
const INITIAL_STATE = {
  pages: [],
};
const APPDATA_ACTION_TYPES = {
  SET_PAGES: "SET_PAGES",
};
const appDataReducer = (state, action) => {
  console.log("almost there")
  const { type, payload } = action;

  switch (type) {
    case APPDATA_ACTION_TYPES.SET_PAGES:
      return {
        ...state,
        ...payload,
      };
    default:
      throw new Error(`Unhandled type ${type} in appdataReducer`);
  }
};

export const AppDataProvider = ({ children }) => {
  const [{ pages }, dispatch] = useReducer(appDataReducer, INITIAL_STATE);
  const setPages = (newPages) => {
    dispatch(
      createAction(APPDATA_ACTION_TYPES.SET_PAGES, {
        pages: newPages
      })
    );
  };
  useEffect(()=>{
    const getAppData= async ()=>{
      const pages=localPages;
      setPages(pages)
      console.log("working")
    }
    getAppData()
  },[])
  
  const value = {
    pages,
    setPages,
  };
  return <AppDataContext.Provider value={value}>{children}</AppDataContext.Provider>;
};
