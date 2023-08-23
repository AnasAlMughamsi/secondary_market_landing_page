import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar';
import "./Home.scss"

const Home = () => {

    const [textFlip, settextFlip] = useState();
    const textChange = ["Buy","Sell","Deal"];


  return (

    <header className="header flex flex-center flex-column" id="header">
            <Navbar/>
            <div className="header-container">
                <div className="header-content flex flex-column">
                    <p className='upper_text'>We know that trading has become important</p>
                    <h1 className="text-uppercase header-title">Here it is, yours truly</h1>
                    <h1 className="text-uppercase header-title">
                        Right Way To
                        <span className='text-flipping'>
                            <div className='inner-flipping'>
                                <span className='text-list'>
                                    &nbsp;Deal<br /> 
                                    Sell<br />
                                    Buy
                                </span>
                            </div>
                        </span>
                    </h1>
                        {/* <div className='text-uppercase header-title caption'>
                            Right Way To 
                            <div className='text-box'>
                                <p>Deal</p>
                                <p>Sell</p>
                                <p>Buy</p>
                            </div>

                        </div> */}
                    {/* </div> */}


                    <p className='lower_text'>Your Gateway to the Saudi Startups</p>
                    {/* <div className='btn-container'> */}
                        <a href="/" className="btn">
                            Try it now
                            <img className='arrow-icon' src={"images/arrow.svg"} alt="logo"/>
                        </a>

                    {/* </div> */}
                </div>

            </div>
            <div className='landing-image'>
                <img src={"images/photos.svg"} alt="logo" width="1199px" height="519px"/>
            </div>
        </header>

  )
}

export default Home;