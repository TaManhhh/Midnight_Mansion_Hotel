import React from "react";
import "./RoomsSuites.css";
import Room1 from "../img/room-1.jpg";
import Room2 from "../img/room-2.jpg";
import Room3 from "../img/room-3.jpg";
import Room4 from "../img/room_1_n_1-1024x683.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
function RoomsSuites(props) {
  const slideCards = [
    {
      img: Room1,
      title: "Luxury Room",
      description: "20m2 | Balcony| Lake View",
    },
    {
      img: Room2,
      title: "Double Room",
      description: "20m2 | Balcony| Lake View",
    },
    {
      img: Room3,
      title: "Prenium Room",
      description: "20m2 | Balcony| Lake View",
    },
    {
      img:Room4,
      title: "Luxury Room",
      description: "20m2 | Balcony| Lake View",
    },
    {
      img: Room3,
      title: "Prenium Room",
      description: "20m2 | Balcony| Lake View",
    },
    {
      img: Room1,
      title: "Luxury Room",
      description: "20m2 | Balcony| Lake View",
    },
  ];

  const slideLeft = () => {
    var slideCards = document.getElementById("slideCards");
    slideCards.scrollLeft = slideCards.scrollLeft - 500;
  };
  const slideRight = () => {
    var slideCards = document.getElementById("slideCards");
    slideCards.scrollLeft = slideCards.scrollLeft + 500;
  };
  return (
    <div className="RoomsSuites w-full">
      <div className="section-title">
        <div className="sub-title caret-white">DISCOVER</div>
        <div className=" title-name">Rooms vs Suites</div>
      </div>
      <div className="slider-card">
        <div className="main-slider">
          <FontAwesomeIcon
            className="angle-left"
            icon={faAngleLeft}
            onClick={slideLeft}
          />
          <div className="slideCards" id="slideCards">
            {slideCards.map((slideCard, index) => {
              return (
                <NavLink  to="/The-Booking" className="card font-serif  hover:bg-yellow-500" key={index}>
                  <div
                    className="card-img"
                    style={{
                      backgroundImage: `url(${slideCard.img})`,
                      backgroundSize: "cover",
                    }}
                  ></div>
                  <div className="card-img-title">{slideCard.title}</div>
                  <p className="card-img-description">
                    {slideCard.description}{" "}
                  </p>
                  </NavLink>
  
              );
            })}
          </div>
          <FontAwesomeIcon
            className="angle-right"
            icon={faAngleRight}
            onClick={slideRight}
          />
        </div>
      </div>
    </div>
  );
}

export default RoomsSuites;
