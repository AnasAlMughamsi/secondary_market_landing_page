import React, { useEffect } from 'react'
import Navbar from '../Navbar/Navbar';
import "./Home.scss"

const Home = () => {

    const maxPadding = 0; // Initial padding of the container 
    const maxScrollFor100 = 0; // Y Scroll Point where the image should be 100% width
    const imgContainer = document.getElementById('img-landing')


    function getPaddingHz(hzPadding, sizeUnit = 'px') {
        return '0 ' + hzPadding + sizeUnit;
    }

    if(imgContainer) {
        imgContainer.style.padding = getPaddingHz(maxPadding); 
    }


    useEffect(() => {

        window.addEventListener('scroll', function(event)  {
            event.preventDefault();

            const currentYHight = window.scrollY; 
            const percent = 100 - (currentYHight >= maxScrollFor100 ? 100 : currentYHight / (maxScrollFor100 / 100));

            console.log("scroll Y point: ",currentYHight)
            const padding = maxPadding * (percent / 100);

            if(currentYHight > 350 && currentYHight < 800) {
                if(imgContainer) {
                    imgContainer.classList.add("active-scroll");
                } 
            } 
            else {
                if(imgContainer) {
                    imgContainer.classList.remove("active-scroll");
                    imgContainer.style.backgroundColor = "white"
                } 

            }
            
        })
        

    }, [imgContainer])
    

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
                    
                    <p className='lower_text'>Your Gateway to the Saudi Startups</p>
                        <a href="/" className="btn">
                            Try it now
                            <img className='arrow-icon' src={"images/arrow.svg"} alt="logo"/>
                        </a>    
                    
                    <div className='scroll'>
                        <img src={"images/scroll.svg"} alt="scroll"/>
                    </div>
                </div>

            </div>


            <div className='landing-image-container active-scroll' id='img-landing'>
                <img src={"images/photos.svg"} alt="logo"/>
            </div>
        </header>

  )
}

export default Home;