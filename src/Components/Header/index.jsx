import React,{useState} from 'react'

import { Link } from 'react-router-dom'
import { UserIcon,XIcon,Downarrow,Telephone,MenuIcon,MobileIcon } from '../../Res/icons'
import "./style.scss"
const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false);     

    return ( 
  <div className="container">
       <div className="main__header  px-6 py-2 center  md-flex  md-space-between md-wrap  middle pointer">

         {/* LEFT */}
         <div className="left__header xs-flex xs-row xs-space-between flex gap-7 middle ">
         {/* xs-flex xs-row xs-space-between */}
           <div className="logo ">
             <img className="image-contain" src="images/header/logo.png" />
           </div>

           {/* NAV */}
           <div className={`nav ${menuOpen ? "active" : ""}`}>
             <ul className="fs-15 fw-500 flex gap-4 xxl-flex xxl-gap-7 line-7">
               <li><Link to="/home">Home <Downarrow /></Link></li>
               <li><Link to="/listings">Listings <Downarrow /></Link></li>
               <li> <Link to="/blog">Blog <Downarrow /></Link></li>
               <li><Link to="/pages">Pages <Downarrow /></Link></li>
               <li className="about__pagge fw-700">About</li>
               <li> <Link to="/contact">Contact</Link></li>
             </ul>
           </div>
        
           <div className="contact flex  gap-2 line-4 middle">
             {/* <img className="image-contain" src="images/header/SVG.svg" /> */}
           <MobileIcon/>  <h4 className="fs-15 fw-700">+75 123 456 789</h4>
           </div>
             {/* MOBILE MENU ICON  */}
            <div className="menu__icon" onClick={() => setMenuOpen(!menuOpen)}>
             {menuOpen ? <XIcon/> : <MenuIcon/>}
           </div>
         </div>

         {/* RIGHT */}
         <div className=" right__header flex gap-4 xxl-flex xxl-gap-7 line-7 middle">
           <div className="sign flex gap-1 xl-flex xl-gap-2 middle">
             {/* <img className="image-contain" src="images/header/icon.svg" /> */}
           <UserIcon/>  <h3>Sign in</h3>
           </div>

           <div className="submit__button">
             <button className="btn py-3 px-7">Submit Listing</button>
           </div>

         
         </div>

       </div>
     </div>
  

    )
}

export default Index
