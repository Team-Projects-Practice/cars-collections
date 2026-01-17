import React from 'react'
import "./footer.scss"
import Topfooter from './Topfooter/Topfooter'
import Bottomfooter from './Bottomfooter/Bottomfooter'
const Footer = () => {
  return (
    <div className="footer__container">
      <div className="footer">

       <Topfooter/>
    <Bottomfooter/>
      </div>
    </div>
  )
}

export default Footer