import React from 'react'
import { SocialIcons } from '../../../Res/icons'
import "./topfooter.scss"
const Topfooter = () => {
  return (
    <div className="topfooter__container">
      <div className="top__footer">
        <div className="company__details">
          <h2>Company</h2>
          <ul>
            <li>About Us</li>
             <li>Blog</li>
              <li>Services</li>
               <li>FAQs</li>
                <li>Terms</li>
                 <li>Contact Us</li>
          </ul>
        </div>
        <div className="quick__links">
<h2>Quick Links</h2>
<ul>
  <li>Get in Touch</li>
    <li>Help center</li>
      <li>Live chat</li>
        <li>How it works</li>
</ul>
</div>
<div className="our__brands">
<h2>Our Brands</h2>
<ul>
  <li>Toyota</li>
   <li>Porsche</li>
    <li>Audi</li>
     <li>BMW</li>
      <li>Ford</li>
   <li>Nissan</li>
    <li>Peugeot</li>
     <li>Volkswagen</li>
</ul>
</div>
<div className="vehicles__types">
  <h2>Vehicles Type</h2>
  <ul>
    <li>Sedan</li>
    <li>Hatchback</li>
    <li>SUV</li>
     <li>Hybrid</li>
    <li>Electric</li>
    <li>Coupe</li>
     <li>Truck</li>
    <li>Convertible</li>
  </ul>
</div>
<div className="sale__hours">
  <h2>Sale Hours</h2>
   <p>
            <span>Monday – Friday: 09:00AM – 09:00 PM</span>
            <span>Saturday: 09:00AM – 07:00PM</span>
            <span>Sunday: Closed</span>
          </p>
          <div className="social__icons">
            <h5>Connect With Us</h5>
           <SocialIcons/>
       
          </div>
</div>
      </div>
    </div>
  )
}

export default Topfooter