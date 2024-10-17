import React from 'react'
import './Header.css'
import Logo from '../assets/Logo.png'
import {Button} from '@mui/material'

function Header() {
  return (
    <div className='header'>
        <img className='header__Logo' alt='' src={Logo}/>
        <div className="header__center"></div>
          <div className="center__button">Home</div>
          <div className="center__button">Accommodation & Suits</div>
          <div className="center__button">Offers</div>
          <div className="center__button">My Bookings</div>
        <div className="center__button">Profile</div>

        <div className='header__Right'>
            <div className='headerContainer'>
                <Button className='header__Buuton'>Sign Up</Button>
            </div>
        </div>
    </div>
  )
}

export default Header