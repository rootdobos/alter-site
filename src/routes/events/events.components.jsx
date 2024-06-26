import { Routes, Route } from "react-router-dom";
import EventList from "../../components/event-list/event-list.component";
import EventDetails from "../../components/event-details/event-details.component";
import Alter from "./alter/alter.component";
import AlterZone from "./alterzone/alterzone.component";

const Events = ()=>{
    return <Routes>
      <Route index element={<EventList />} />
      
      <Route path="/alter" element={<Alter />} />
      <Route path="/alterzone" element={<AlterZone />} />
      <Route path=":slug" element={<EventDetails />} />
    </Routes>

}

export default Events