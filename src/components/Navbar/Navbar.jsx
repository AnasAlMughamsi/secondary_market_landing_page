import React from 'react'
import "./Navbar.css"


const Navbar = () => {
  return (
    <nav className='navbar w-100 flex'>
      <div className='container w-100 flex'>
        <div className='navbar-content felx'>
          <div className='brand-logo flex flex-between'>
            <div className='logo'>
              <img src={"/images/logo.svg"} alt="logo" width="190px" height="40px"/>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar