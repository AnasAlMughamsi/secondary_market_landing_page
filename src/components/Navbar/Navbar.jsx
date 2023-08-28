import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import ReactGA from "react-ga4";
import "./Navbar.scss"


const Navbar = () => {

  const handlBtn = () => {
    ReactGA.event({
        category: "Home",
        action: "S Try it now btn",
    });
}

  return (
    <nav className='navbar w-100 flex'>
      <div className='container w-100'>
        <div className='navbar-content'>
            <div className='logo'>
            {/* <img src={process.env.PUBLIC_URL + '/yourPathHere.jpg'} />  */}

              <img src={"/images/logo.svg"} alt="logo" width="190px" height="40px"/>
            </div>

            <div className='flex'>
              <ul className='navbar-nav'>
                <li> <AnchorLink href='/home'><span className='line' style={{width: "80px"}}></span> Welcome</AnchorLink></li>
                <li> <AnchorLink href='/service'><span className='line' style={{width: "60px"}}></span> Service</AnchorLink></li>
                <li> <AnchorLink href='/qualities'><span className='line'style={{width: "60px"}}></span> Join Us</AnchorLink></li>
                <li> <AnchorLink href='/contact'><span className='line' style={{width: "90px"}}></span> Contact Us</AnchorLink></li>
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