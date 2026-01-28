import React, { useState } from 'react'
import "./tabs.scss"
const Tabs = ({menu,setMenu,tabs}) => {
  return (
    <div className="tabs__container">
             <div className="card__menu">
         <ul>
          {tabs.map((tab)=>(
            <li key={tab.value} onClick={()=>setMenu(tab.value)} 
             className={menu === tab.value ? "active" : ""}>
              {tab.label}
             </li>
          ))}
         </ul>
        </div>
    </div>
  )
}

export default Tabs