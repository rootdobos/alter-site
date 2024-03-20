import { Routes, Route } from "react-router-dom";
import EventList from "../../components/event-list/event-list.component";
import EventDetails from "../../components/event-details/event-details.component";

const Events = ()=>{
    return <Routes>
      <Route index element={<EventList />} />
      
      <Route path=":slug" element={<EventDetails />} />
    </Routes>

}

export default Events