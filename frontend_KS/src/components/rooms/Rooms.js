import "./rooms.css";
import  Search  from "./Search/Search";
import Bn1 from "../img/bn1.jpg";
import React  from "react";
import Pagination from "./Pagination";
import { useSearchParams } from "react-router-dom";
import List from "./List";
const Room = () => {
  const[params] = useSearchParams()
  return (
    <div className="w-full flex flex-col items-center">
      <div className="content-rooms">
        <img className="img" src={Bn1} alt="" />
        <p className="text-rooms">Rooms</p>
      </div>
      <div className="w-3/5 mt-5">
        <Search/>
      </div>
      <List page={params.get('page')}/>
      <Pagination page={params.get('page')}/>
    </div>
  );
};
export default Room;
