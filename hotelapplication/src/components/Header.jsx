import React from 'react'
import './Header.css'
import Logo from '../assets/Logo.png'

function Header() {
  return (
    <div className='Header'>
        <img className='Header_Logo' alt='' src={Logo}/>
        <div className="header__center"></div>
        <div className="button">Home</div>
        <div className="button">Accommodation & Rooms</div>
        <div className="button">Offers</div>
        <div className="button">My Bookings</div>
        <div className="button">Profile</div>
    </div>
  )
}

export default Header