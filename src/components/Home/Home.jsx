import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar';
import ReactGA from "react-ga4";
import { motion ,useScroll, useTransform } from "framer-motion";

import "./Home.scss"

const Home = () => {
    // const [isSticky, setIsSticky] = useState(false);
    let image1 = "/images/photos.svg";
    let image2 = "/images/photos(scrolling).svg";
    // const [image, setImage] = useState(image1)
    const [scaling, setScaling] = useState(null)
    
    const { scrollYProgress } = useScroll();
    // const divImage = document.getElementById('wrapper')

    const swapImages = () => {
        const windowHeight = window.scrollY;
        // if((windowHeight > 350) && (windowHeight < 800)) {
        //     if(divImage !== null) {
        //         setImage(image2);
        //         divImage.style.backgroundColor = "red"
        //         divImage.classList.add("image2");
        //     }
        // } else {
        //     if(divImage !== null) {
        //         setImage(image1);
        //         divImage.classList.add("image1");
        //     }
        // }
        // (windowHeight > 350) && (windowHeight < 800) ? setImage(image2) : setImage(image1);
        if((windowHeight > 250) && (windowHeight < 800)) {
            setScaling(scaleAnim);
        } else {
            setScaling(scaleReset)
        }
        // ((windowHeight > 250) && (windowHeight < 800)) ? setScaling(scaleAnim) : setScaling(scaleReset);
      };


    useEffect(() => {
        if (typeof window === undefined) return;
        window.addEventListener("scroll", swapImages);
    
        return () => {
          window.removeEventListener("scroll", swapImages);
        };
      }, []);

    
      
        const scaleAnim = useTransform(scrollYProgress, [0, 0.5], [1, 1.13]);   
        const scaleReset = useTransform(scrollYProgress, [0, 0.5], [1, 1]);

        // const yPosAnim = useTransform(scrollYProgress, [0, 0.4, 1], [0, -100, 0])


        const handlBtn = () => {
            ReactGA.event({
                category: "Home",
                action: "S Try it now btn",
            });
        }

  return (
  
    <header className="header flex flex-center flex-column" id="home">
        <Navbar/>
        <div className="header-container">
            <div className="header-content flex flex-column">
                <p className='upper_text'>We know that trading has become important</p>
                <h1 className="text-uppercase header-title">The First Private-Company Market Place.</h1>
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
                    <a href="https://secondary-market.netlify.app/register" className="btn" onClick={handlBtn}>
                        Try it now
                        <img className='arrow-icon' src={"/images/arrow.svg"} alt="logo"/>
                    </a>    
                
                <div className='scroll'>
                    <img src={"images/scroll.svg"} alt="scroll"/>
                </div>
            </div>

        </div>

        <div className="wrapper">
            <motion.div>
                <motion.img
                    initial={{ y: -3 }}
                    animate={{ y: 3 }}
                    transition={{
                        type: "smooth",
                        repeatType: "mirror",
                        duration: 2,
                        repeat: Infinity,
                    }}
                    className='image-landing'
                    // style={{scale: scaling}}
                    src={image1}
                    alt="floater"
                />
                {/* <img src={image} alt=''/> */}
            </motion.div>
        </div>
    </header>

  )
}

export default Home;