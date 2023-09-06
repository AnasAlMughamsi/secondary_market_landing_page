import React, { useState, useEffect } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Link, NavLink, useLocation } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import ReactGA from "react-ga4";
import "./Navbar.scss"


const Navbar = () => {

  const currentRoute = useLocation().hash.toLowerCase();
  console.log("currentRoute: ", currentRoute)
  const [stickyClass, setStickyClass] = useState('relative');

  useEffect(() => {
    window.addEventListener('scroll', stickNavbar);

    return () => {
      window.removeEventListener('scroll', stickNavbar);
    };
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 200 ? setStickyClass('sticky_navbar') : setStickyClass('relative');
    }
  };

  const handlBtn = () => {
    ReactGA.event({
        category: "Home",
        action: "S Try it now btn",
    });
}

if(window > 100) {

}

  return (
    <nav className={`navbar w-100 flex ${stickyClass}`}>
      <div className='container w-100'>
        <div className='navbar-content'>
            <div className='logo'>
            {/* <img src={process.env.PUBLIC_URL + '/yourPathHere.jpg'} />  */}

              <img src={"/images/logo.svg"} alt="logo" width="190px" height="40px"/>
            </div>

            <div className='flex'>
              <ul className='navbar-nav'>
                <li className={currentRoute.includes("#home") ? "active_bold":"not_active"}> <HashLink smooth to='#home'><span className={currentRoute.includes("#home") ? "active":"line"} style={{width: "80px"}}></span> 
                    Welcome</HashLink>
                </li>
                <li> <HashLink smooth to="#service"><span className='line' style={{width: "60px"}}></span> Service</HashLink></li>
                <li> <HashLink smooth to='#qualities'><span className='line'style={{width: "60px"}}></span> Join Us</HashLink></li>
                <li> <HashLink smooth to='#contact'><span className='line' style={{width: "90px"}}></span> Contact Us</HashLink></li>
              </ul>

              <a href="https://secondary-market.netlify.app/register" 
                  className="btn-nav" 
                  onClick={handlBtn}> Sing in
              </a>  
            </div>


        </div>
      </div>
    </nav>
  )
}

export default Navbar