import React, { useState, useCallback } from "react";
import "./header.css";
import { NavLink } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import NavLinks from "./NavLinks";
// import { LoginContext } from "../../context/AuthContext";
// import { logout } from "../auth/firebase/firebase";
import { Button } from "../form";
import { path } from "../../ultils/constant";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import * as actions from '../../store/action'
function Header() {
  const navigate = useNavigate();
  const dispatch =useDispatch();
  const {isLoggedIn}= useSelector(state=>state.auth)
  const goLogin = useCallback((flag) => {
    navigate(path.LOGIN,{state:{flag}})
  },[]);

  const [navbar, setNavbar] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBackground);
  return (
    <div className="w-full fixed z-50 ">
      <div
        className={
          navbar
            ? "relative w-full h-20 py-4 px-28 bg-white "
            : "relative w-full h-20 px-28 py-4"
        }
      >
        <div className="flex space-x-72 ">
          <NavLink to="/">
            {" "}
            <img
              className="h-12"
              src="https://static.ybox.vn/2020/9/4/1600941241699-1594126270885-1577762085284-1571027713600-logo%20techkids%20moi%207%20(1)-05%20(1).png"
              alt=""
            />
          </NavLink>
          <NavLinks />
          <div className="flex items-center gap-1">
          {!isLoggedIn &&  <div className="flex items-center gap-1">
            <Button
                text={"Log in"}
                textColor="text-white"
                bgColor={"bg-amber-400"}
                onClick={() => goLogin(false)}
              />
              <Button
                text={"Sign up"}
                textColor="text-white"
                bgColor={"bg-amber-400"}
                onClick={() => goLogin(true)}
              />
           </div>}
           {isLoggedIn &&  <div className="flex items-center gap-1">
            <small>Ten</small>
            <Button
                text={"Log out"}
                textColor="text-white"
                bgColor={"bg-amber-400"}
                onClick={() => dispatch(actions.logout())}
              />
           </div>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
