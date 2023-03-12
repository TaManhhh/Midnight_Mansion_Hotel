import "../header/header.css";
import React, { useEffect, useState } from 'react'
import { NavLink } from "react-router-dom";
const nav =[
  {name:"HOME" , path:'/home'},
  {name:"BOOKING" , path:'/The-Booking'},
  {name:" ROOMS" , path:'/Rooms'},
  {name:"CONTACT" , path:'/Contact'},
]
  

const NavLinks = ({isAdmin}) => {
  const activeClass = (params) => {
    return params.isActive ? "active-menu" : "active-menu-items";
  };


  return (
    <div className="flex items-center justify-center ">
      <div className="flex items-center gap-14 text-sm ">
        {nav?.length > 0 && nav.map((item,index)=>{
          return(
            <div key={index}>
              <NavLink to={item.path}
                className={activeClass}
              > {item.name}</NavLink>
              
            </div>
            
          )
        })}
      </div>
    </div>
  );
};
export default NavLinks;
