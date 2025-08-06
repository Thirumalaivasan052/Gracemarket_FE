import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'


const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
           {/* <img className='footerlogo' src={assets.headerlogo1} alt=''  / */}
            <img src={assets.headerlogo} alt='' className='logo-foot' />
           <p>I am a passionate and dedicated Full Stack Developer with a strong foundation in both frontend and backend technologies. I have recently completed a comprehensive full-stack project that showcases my ability to design, develop, and deploy robust web applications. </p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <a href='/'><li>Home </li></a>
                    <a href='/'><li>About us</li></a>
                    <a href='/'><li>Delivery</li></a>
                   <a href='/'><li>Privacy policy</li></a> 
                </ul>
                </div>
            <div className="footer-content-right">
              <h2>GET IN TOUCH</h2>
              <ul>
                <li>+91-9342783052</li>
                <a href=""> <li>thirumalaivasan052@gmail.com</li></a>
                <li>Chennai</li>

              </ul>

            </div>
           
        </div>
        <hr/>
        <p className="footer-copyright">
            Copyright 2025 © Thiru.com - All Right Reserved.
        </p>
    </div>
  )
}

export default Footer