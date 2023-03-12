import React from 'react'
import {NavLink} from 'react-router-dom'
import "./footer.css"
function Footer() {
  return (
    <div className='footer'>
      
         <div className='line'></div>
        <ul className='footer-ul grid grid-cols-4'>
            <li className='footer-li'> <NavLink to="/"> <img
                    className='logo bg-white'
                    src="https://static.ybox.vn/2020/9/4/1600941241699-1594126270885-1577762085284-1571027713600-logo%20techkids%20moi%207%20(1)-05%20(1).png"
                    alt=""/></NavLink>
            </li>
            <li className='footer-li'>
                <p className='footer-tl'>ADDRESS</p>
                <div>Khoảng cách địa lý sẽ không xa nếu chúng ta coi nhau là tất cả.</div>
            </li>
            <li className='footer-li'>
              <p className='footer-tl'>PHONE</p>
              <p> 0999977722</p>
            </li>
            <li className='footer-li'>
              <p className='footer-tl'>RESERVATIONS</p>
              <p> MINDX@HOTEL.COM</p>
            </li>
        </ul>
    </div>
  )
}

export default Footer
