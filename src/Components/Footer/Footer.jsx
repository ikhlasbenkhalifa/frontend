import React from 'react'
import './Footer.css'
import foot_logo from '../Assets/logo.png'
import whats_icon from '../Assets/whatsapp_icon.png'
import inst_icon from '../Assets/instagram_icon.png'
import pin_icon from '../Assets/pintester_icon.png'
const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={foot_logo} alt=""/>
        <p>SHOPPING</p>
      </div>
      <ul className="footer-links">
        
        <li>Products</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
            <img src={whats_icon} alt=""/>
        </div>
        <div className="footer-icons-container">
            <img src={inst_icon} alt=""/>
        </div>
        <div className="footer-icons-container">
            <img src={pin_icon} alt=""/>
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright@2024 - All Right Reserved</p>
      </div>
    </div>
  )
}

export default Footer
