import React from 'react'
import "./Qualities.scss"

const Qualities = () => {
  return (
    <div className='qualities'>

      <div className='quality-title'>
        <h2>Join us Now and be one of our Community </h2>
        <p>Explore Our Features in Secondry Market</p>
      </div>

      <div className='qualities-cards-container'>

        <div className='quality-card'>
          <div className='flex flex-column inner-card'>
            <h3>As Company</h3>
            <p>Join the dynamic end to end market, list your company, reward your shareholders
              by letting them buy and sell your shares in a full transparent market</p>
              <a href="/" className="btn">Join as a Company</a>
          </div>
            <img className='jigsaw-img' src={"images/jigsaw.png"} alt="logo"/>
        </div>
        
        <div className='quality-card'>
          
          <div className='flex flex-column inner-card'>
            <h3>As Investor </h3>
            <p>Invest in company-run secondaries with the same 
              ease & company access as public markets.</p>
            <a href="/" className="btn">Join as a Investor</a>
          </div>
          <img className='card-hand-icon' src={"images/Magnifier.svg"} alt="logo"/>
        </div>

      </div>
    </div>
  )
}

export default Qualities