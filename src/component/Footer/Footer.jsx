import React from 'react'
import './Footer.css/'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-contant">
        <div className="footer-contant-left">
          <img src={assets.logo} alt=''/>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita blanditiis doloremque dolore modi voluptatum, laborum nulla ducimus qui impedit perferendis veritatis, laboriosam facere nobis quia quas nostrum laudantium libero natus. </p>
          <div className="footer-social-icon">
            <img src={assets.facebook_icon} alt=''></img>
            <img src={assets.twitter_icon} alt=''></img>
            <img src={assets.linkedin_icon} alt=''></img>
           </div>
           </div>
          <div className="footer-contant-center">
            <h2> COMPANY</h2>
            <ul>
              <li>HOME</li>
              <li>ABOUT US</li>
              <li>DELIVERY</li>
              <li>PRIVACY POLICY</li>
            </ul>
          </div>
          <div className="footer-contant-right">
          <h2>
            GET IN TOUCH
          </h2>
          <ul>
            <li>+91 808-013-332</li>
            <li>contact@tomato.com</li>
            
          </ul>
          
       </div>
      </div>
      <hr/>
      <p className='hooter-copyright'> Copyright 2025 tomato.com = All Right Reserved.</p>
    </div>
  )
  }


export default Footer
