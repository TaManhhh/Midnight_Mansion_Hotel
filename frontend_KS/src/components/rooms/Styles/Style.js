import "./Style.css";
import { Title } from "./Title";
import { NavLink } from "react-router-dom";
import Room1 from "../../img/room-1.jpg";
import Room2 from "../../img/room-2.jpg";
import Room3 from "../../img/room-3.jpg";
import Room4 from "../../img/room_1_n_1-1024x683.jpg";
export const Style = () => {
  
  return (

      <div className="row-style">
        <NavLink className='hover-card'  to="/The-Booking">
          <Title
            img={Room1}
            title="Luxury Rooms"
          />
        </NavLink>
        <NavLink className='hover-card' to="/The-Booking">
       
          <Title
            img={Room2}
            title="Double Rooms"
          />
        </NavLink>
        <NavLink className='hover-card' to="/The-Booking">
          <Title
            img={Room3}
            title="Classic Rooms"
          />
        </NavLink>
        <NavLink className='hover-card' to="/The-Booking">
          
          <Title
            img={Room4}
            title="Premium Rooms"
          />
        </NavLink>
        <NavLink className='hover-card' to="/The-Booking">
          <Title
            img={Room2}
            title="Standard Rooms"
          />
        </NavLink>
        <NavLink className='hover-card' to="/The-Booking">
          <Title
            img={Room4}
            title="Double Rooms"
          />
        </NavLink>
        <NavLink className='hover-card' to="/The-Booking">
          <Title
            img={Room3}
            title="Classic Rooms"
          />
        </NavLink>
        <NavLink className='hover-card' to="/The-Booking">

          <Title
            img={Room2}
            title="Golden Rooms"
          />
        </NavLink>
      </div>
    
  );
};
