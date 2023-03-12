import "../header/header.css";
import { NavLink } from "react-router-dom";

const NavLinks = (props) => {
  const activeClass = (params) => {
    return params.isActive ? "active-menu" : "active-menu-items";
  };

  return (
    <div>
      <ul className=" flex pt-4 space-x-14">
        <li>
          <NavLink className={activeClass} to="/">
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink className={activeClass} to="/The-Booking">
            BOOKING
          </NavLink>
        </li>
        <li>
          <NavLink className={activeClass} to="/Rooms">
            ROOMS
          </NavLink>
        </li>
        <li>
          <NavLink className={activeClass} to="/Contact">
            CONTACT
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
export default NavLinks;
