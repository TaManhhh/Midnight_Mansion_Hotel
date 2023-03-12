import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Login from "./components/auth/login/Login";
import Booking from "./page/booking/Booking";
import Footer from "./components/footer/footer";
import Header from "./components/header/Header";
import { Contact } from "./components/Contact/Contact";
import Room from "./components/rooms/Rooms";
import {  useEffect } from "react";
import * as actions from './store/action'
import { path } from "./ultils/constant";
import { useDispatch, useSelector } from "react-redux";

function App() {
  // const dispatch = useDispatch()
  // const { isLoggedIn } = useSelector(state => state.auth)
  // useEffect(() => {
  //   setTimeout(() => {
  //     isLoggedIn && dispatch(actions.getCurrent())
  //   }, 1000)
  // }, [isLoggedIn])

  // useEffect(() => {
  //   dispatch(actions.getPrices())
  //   dispatch(actions.getAreas())
  //   dispatch(actions.getProvinces())
  // }, [])
  return (
    <div className="App ">
      {/* {login === true ? (
        <header>
          
        </header>
      ) : (
        <></>
      )}*/}
      <Header /> 
      <Routes>
      <Route path={path.HOME} element={<Home />}/>
       
       <Route path={path.LOGIN} element={<Login />} />
        <Route path="/The-Booking" element={<Booking />} />
        <Route index path="/" element={<Home />} />
        <Route path="/Rooms" exact element={<Room />} />
        <Route path="/Contact" element={<Contact />} />
        {/* <Route
          path="/auth"
          element={check === false ? <LoginScreen /> : <SignupScreen />}
        /> */}
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
