import React from 'react'
import { DotIcon } from '../../../Res/icons'
import "./bottomfooter.scss"
const Bottomfooter = () => {
  return (
    <div className="bottomfooter__container">
      <div className="bottom__footer">
        <p>© 2025 exemple.com. All rights reserved.</p>
        <div className="terms">
          <h5>Terms & Conditions</h5>
          <div className="privacy__badge">
            <span className="privacy__icon"><DotIcon/></span>
            <span className="privacy__text">Privacy Notice</span>
          </div>
        </div>
      </div>
    </div>
)
}
export default Bottomfooter