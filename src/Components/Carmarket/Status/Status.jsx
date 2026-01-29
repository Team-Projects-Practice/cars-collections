import React from 'react'
import "./status.scss"
const Status = ({stats}) => {
  return (
    <div className="status">
 {stats.map((item, index) => (
        <div key={index}>
          <h3>{item.value}</h3>
          <p>{item.label}</p>
        </div>
      ))}
    </div>
  )
}

export default Status