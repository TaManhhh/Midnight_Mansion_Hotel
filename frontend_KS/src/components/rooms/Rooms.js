import "./rooms.css";
// import { Search } from "./Search/Search";
import { Style } from "./Styles/Style";
// import roomData from "./room.json";
import Bn1 from "../img/bn1.jpg";
import Header from "../header/Header";
// import Search2 from "./Search2/Search2";

const Room = () => {
  return (
    <div className="">
      <Header/>
      <div className="content-rooms">
        <img className="img" src={Bn1} alt="" />
        <p className="text-rooms">Rooms</p>
      </div>
      {/* <div className="search-room">
        <Search placeholder="Search..." data={roomData} />
      </div> */}
      <div>
        <Style />

      </div>
    </div>
  );
};
export default Room;
