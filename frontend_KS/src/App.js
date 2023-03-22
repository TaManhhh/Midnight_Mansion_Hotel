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
import Detail from "./components/rooms/Detail";

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
      <Header /> 
      <Routes>
      <Route path={path.HOME} element={<Home />}/>
      <Route path={path.HOME_PAGE} element={<Home />}/>
       <Route path={path.LOGIN} element={<Login />} />
        <Route path={path.ABOUT_US} element={<Booking />} />
        <Route path={path.ROOM} exact element={<Room />} />
        <Route path={path.CONTACT} element={<Contact />} />
        <Route path={path.DETAL_POST__TITLE__POSTID} element={<Detail/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
