import React, { useState } from 'react'
import "./header.scss"
import { Link } from 'react-router-dom'
import { UserIcon, XIcon, Downarrow, Telephone, MenuIcon, MobileIcon } from '../../Res/icons'
const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="header__container">
      <div className="main__header">

        {/* LEFT */}
        <div className="left__header">
          <div className="logo ">
            <img src="images/header/logo.png" />
          </div>

          {/* NAV */}
          <div className={`nav ${menuOpen ? "active" : ""}`}>
            <ul>
              <li><Link to="/home">Home <Downarrow /></Link></li>
              <li><Link to="/listings">Listings <Downarrow /></Link></li>
              <li> <Link to="/blog">Blog <Downarrow /></Link></li>
              <li><Link to="/pages">Pages <Downarrow /></Link></li>
              <li className="about__pagge fw-700">About</li>
              <li> <Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="contact">
            <MobileIcon /><h4 className="fs-15 fw-700">+75 123 456 789</h4>
          </div>
          {/* MOBILE MENU ICON  */}
          <div className="menu__icon" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <XIcon /> : <MenuIcon />}
          </div>
        </div>

        {/* RIGHT */}
        <div className=" right__header">
          <div className="sign">
            <UserIcon />  <h3>Sign in</h3>
          </div>
          <div className="submit__button">
            <button className="btn">Submit Listing</button>
          </div>
        </div>
      </div>
    </div>
      )
}

export default Index
