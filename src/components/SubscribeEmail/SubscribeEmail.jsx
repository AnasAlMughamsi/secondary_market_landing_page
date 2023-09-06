import React, { useState } from 'react'
import "./SubscribeEmail.scss"
const SubscribeEmail = () => {

  const [email, setEmail] = useState("")


  return (
    <div className='subscribe-container'>
      <div className='subscribe-header'>
      Subscribe Our Newsletter To Get More Updates
      </div>

      <div className='subscribe-form'>
        <form >
          <input className="subscribe-input" name='email' 
            placeholder="Email" id="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit" className="subscribe-btn">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  )
}

export default SubscribeEmail;