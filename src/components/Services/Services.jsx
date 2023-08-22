import React from 'react'
import "./Services.scss"
const Services = () => {
  return (
    <div className='services-container'>
      <div className='services-content'>
        
        <div className='service-title'>
          <h1>That the Way To Start Trading</h1>
          <p>Try a Variety of Benefits when Using Our Services.</p>
        </div>

        <div className='service-list'>
          <ul>
            <li>
              <span className='corner-line-1'></span> 
              <div className='service-content-list'>
                <span className='number'>1</span>
                <h2>Marketplace</h2>
                <p>To Trade your Shares Securely</p>
              </div>
            </li>

            <li> 
              <span className='corner-line-2'></span> 
              <div className='service-content-list'>
                <span className='number'>2</span>
                <h2>Investment Portfolio</h2>
                <p>Easily manage your Assets</p>
              </div>
            </li>

            <li> 
              <span className='corner-line-3'></span> 
              <div className='service-content-list'>
                <span className='number-3'>3</span>
                <h2>Fees Transactions</h2>
                <p>Get charged only when you trade</p>
              </div>
            </li>

          </ul>
        </div>

      </div>

    </div>
  )
}

export default Services