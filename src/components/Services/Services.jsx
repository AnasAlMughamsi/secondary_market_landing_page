import React from 'react'
import "./Services.scss"
const Services = () => {
  return (
    <section className='services-container' id='service'>
      <div className='services-content'>
        
        <div className='service-title'>
          <h1>That the Way To Start Trading</h1>
          <p>Fair execution. <br/> All investors are treated equally and transparently.</p>
        </div>

        <div className='service-list'>
          <ul>
            <li>
              <span className='corner-line-1'></span> 
              <div className='service-content-list'>
                <span className='number'>1</span>
                <h2>List</h2>
                <p>Simple steps to list your company in dynamic market</p>
              </div>
            </li>

            <li> 
              <span className='corner-line-2'></span> 
              <div className='service-content-list'>
                <span className='number'>2</span>
                <h2>Sell</h2>
                <p>Clear path to liquidity with real time pricing</p>
              </div>
            </li>

            <li> 
              <span className='corner-line-3'></span> 
              <div className='service-content-list'>
                <span className='number-3'>3</span>
                <h2>Invest</h2>
                <p>Access to pre-vetted growing private companies</p>
              </div>
            </li>

          </ul>
        </div>

      </div>

    </section>
  )
}

export default Services