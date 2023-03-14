import "./rooms.css";
import  Search  from "./Search/Search";
import { Style } from "./Styles/Style";
import Bn1 from "../img/bn1.jpg";
const Room = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="content-rooms">
        <img className="img" src={Bn1} alt="" />
        <p className="text-rooms">Rooms</p>
      </div>
      <div className="w-3/5 mt-5">
        <Search/>
      </div>
      
      <div>
        <Style />

      </div>
    </div>
  );
};
export default Room;
