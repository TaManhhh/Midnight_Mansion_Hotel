import "../header/header.css";
import React, { useEffect, useState } from 'react'
import { NavLink } from "react-router-dom";


const activeClass = (params) => {
    return params.isActive ? "active-menu" : "active-menu-items";
  };
  const nav =[
    {name:"HOME" , path:'/home'},
    {name:"ABOUT US" , path:'/about_us'},
    {name:" ROOMS" , path:'/room'},
    {name:"CONTACT" , path:'/contact'},
  ]

const NavLinks = () => {
  return (
      <div className=" flex items-center justify-center gap-14  ">
        {nav?.length > 0 && nav.map((item,index)=>{
          return(
            <div key={index}>
              <NavLink to={item.path}
                className={activeClass}
              > {item.name}
              </NavLink>
            </div>
          )
        })}
      </div> 
  );
};
export default NavLinks;
