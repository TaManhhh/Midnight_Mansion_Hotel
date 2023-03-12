import React from "react";
import { Outlet } from "react-router-dom";
import ImgLeft from "../img/aboutus01.jpg";
import Chef from "../img/chef-cook.jpg";
import Bar from "../img/bar.jpg";
import Spa from "../img/spa.jpg";
import Avatar from "../img/hehe.jpg";
import Profile from "../img/profile-2.jpg";
// import { Contact } from "../Contact/Contact";

import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faStar } from "@fortawesome/free-solid-svg-icons";
import "./Home.css";
import Slide from "../header/Slide";
import RoomsSuites from "./RoomsSuites";
import Header from "../header/Header";
// import Header from "../header/Header";
function Home() {
  return (
    <div className="home">
      <Header />
      <Slide />
      <div className="content">
        <NavLink className=" buttonn flex hover:bg-white " to="/Rooms">
          VIEW OUR ROOM <FontAwesomeIcon icon={faArrowRight} />{" "}
        </NavLink>
      </div>
      <section className="welcome pd-100">
        <div className="container-welcome">
          <div className="grid grid-flow-col">
            <div className="left  ">
              <div className="section-title ">
                <div className="sub-title">WELCOME</div>
                <div className=" title-name">
                  Upgrade Your <br />
                  Experience
                </div>
              </div>
              <div className="right-p">
                Enjoy sweeping water views when you reserve a Hudson River View
                Suite.
                <br /> Spread out in an Executive or Luxury Suite with over 700
                <br /> square feet of lavish living areas with integrated
                technology.
                <br /> Live the New York lifestyle in the Conrad Suite,
                featuring an office and separate living and dining areas.
              </div>
              <NavLink
                className=" buttonn  flex hover:bg-white "
                to="/The-Booking"
              >
                READ MORE <FontAwesomeIcon icon={faArrowRight} />{" "}
              </NavLink>
            </div>
            <div className="right grid grid-flow-col">
              <div className="img-left  ">
                <img src={ImgLeft} alt=""></img>
              </div>
            </div>
          </div>
        </div>
      </section>
      <RoomsSuites />
      <div className="specials">
        <div className="container-special">
          <div className="section-title">
            <div className="sub-title caret-white">OUR SPECIALS</div>
            <div className=" title-name">
              Where Simple Luxury vs <br /> Tranquility Meet
            </div>
            <div className="right-p mt-16">
              Enjoy sweeping water views when you reserve a Hudson River View
              Suite. Spread out in an Executive or Luxury Suite with over 700
              <br /> square feet of lavish living areas with integrated
              technology.
              <br /> Live the New York lifestyle in the Conrad Suite, featuring
              an office and separate living and dining areas.
            </div>
          </div>
          <div className="special-content">
            <div className="grid grid-cols-2 ">
              <img className="special-img" src={Chef} alt="" />
              <div className="special-ct">
                <div className="sp-title">Restaurants vs Bars</div>
                <div className="sp-des">
                  Within famous entrance are some of the top London restaurants
                  and bars, we welcome guests for a inspiring culinary
                  experience.
                </div>
                <NavLink className=" buttonn  flex hover:bg-white " to="/Rooms">
                  LEARN MORE <FontAwesomeIcon icon={faArrowRight} />{" "}
                </NavLink>
              </div>
              <div className="special-ct">
                <div className="sp-title">Meetings vs Events</div>
                <div className="sp-des">
                  Achieve more with every meeting and event you plan with us.
                  Create priceless experiences that are engaging and productive.
                </div>
                <NavLink className=" buttonn  flex hover:bg-white " to="/Rooms">
                  LEARN MORE <FontAwesomeIcon icon={faArrowRight} />{" "}
                </NavLink>
              </div>
              <img className="special-img" src={Bar} alt="" />
              <img className="special-img" src={Spa} alt="" />
              <div className="special-ct">
                <div className="sp-title">Weddings vs Celebrations</div>
                <div className="sp-des">
                  Within famous entrance are some of the top London restaurants
                  and bars, we welcome guests for a inspiring culinary
                  experience.
                </div>
                <NavLink className=" buttonn  flex hover:bg-white " to="/Rooms">
                  LEARN MORE <FontAwesomeIcon icon={faArrowRight} />{" "}
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" testimonials">
        <div className="section-title">
          <div className="sub-title caret-white">testimonials</div>
          <div className=" title-name">What Customer Say</div>
        </div>
        <div className="grid grid-cols-3">
          <div className="tripadvisor">
            <img
              className="icon-trip "
              src="https://static.ybox.vn/2020/9/4/1600941241699-1594126270885-1577762085284-1571027713600-logo%20techkids%20moi%207%20(1)-05%20(1).png"
              alt=""
            />
            <p className="tt">5.0</p>
            <div>
              <FontAwesomeIcon className="star" icon={faStar} />
              <FontAwesomeIcon className="star" icon={faStar} />
              <FontAwesomeIcon className="star" icon={faStar} />
              <FontAwesomeIcon className="star" icon={faStar} />
              <FontAwesomeIcon className="star" icon={faStar} />
            </div>
            <p className="text text-white">3,000 Review</p>
            <NavLink
              className=" button  flex hover:bg-amber-500 "
              to="/Contact"
            >
              WRITE A Review <FontAwesomeIcon icon={faArrowRight} />{" "}
            </NavLink>
          </div>
          <div className="testimonials">
            <p className="text-2xl font-bold ">Excellent hotel</p>
            <div className="text text-base scroll-pb-5">
              {" "}
              No matter who you are <br />
              where are you from , if you have a kind heart <br />
              Just remember <br />
              You are the most beautiful person
            </div>
            <div className="rate ">
              <FontAwesomeIcon className="star " icon={faStar} />
              <FontAwesomeIcon className="star" icon={faStar} />
              <FontAwesomeIcon className="star" icon={faStar} />
              <FontAwesomeIcon className="star" icon={faStar} />
              <FontAwesomeIcon className="star" icon={faStar} />
            </div>
            <div className="avatar">
              <img className="rounded-full ml-14" src={Avatar} alt="" />
            </div>
            <p className="text">Feb 09,2023</p>
          </div>
          <div className="testimonials">
            <p className="text-2xl font-bold ">Excellent hotel</p>
            <div className="text text-base scroll-pb-5">
              {" "}
              We stayed here for a long weekend <br/>
              and was very impressed with the
              hotel, the staff were<br/> excellent,very friendly and couldn't do
              enough for us.Rooms were very nice , clean and comfortable.<br/>
            </div>
            <div className="rate ">
              <FontAwesomeIcon className="star " icon={faStar} />
              <FontAwesomeIcon className="star" icon={faStar} />
              <FontAwesomeIcon className="star" icon={faStar} />
              <FontAwesomeIcon className="star" icon={faStar} />
              <FontAwesomeIcon className="star" icon={faStar} />
            </div>
            <div className="avatar">
              <img className="rounded-full ml-14" src={Profile} alt="" />
            </div>
            <p className="text">May 20,2022</p>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default Home;
