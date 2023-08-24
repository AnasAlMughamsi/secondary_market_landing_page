import React from 'react'
import "./Footer.scss"
import {FaTwitter, FaTwitch, FaYoutube} from 'react-icons/fa'
import Contact from './Contact/Contact'
const Footer = () => {


  return (
    <div className='footer'>
      <div className='footer-content'>

        <div className='about-container'>
          <img src='images/logo_second.svg' alt='logo-second'/>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. pturi magni,
             impedit deserunt minus quo itaque,officiis facs libero corporis?</p>
          <p> <img src='images/gps.svg' alt=''/> 056 Chanel Crossing</p>
          <p> <img src='images/call.svg' alt=''/> 372-863-6391</p>
          <p> <img src='images/directbox-notif.svg' alt=''/> Rasmal@hotmail.com</p>
        
        <div className='social-container'>
          <ul>
            <li className='social-text'>Social Media</li>
            <li><a href="/" ><FaTwitter/></a> </li>
            <li><a href="/" ><FaYoutube/></a> </li>
            <li><a href="/" ><FaTwitch/></a> </li>
          </ul>
        </div>

        </div>

        <div className='contact-from-container'>
          <Contact/>
        </div>
        
      </div>

    </div>
  )
}

export default Footer