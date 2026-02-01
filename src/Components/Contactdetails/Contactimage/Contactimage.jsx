import React from 'react'
import "./contactimage.scss"
const Contactimage = ({image,alt}) => {
  return (
    <div className="contactimage">
        <img src={image} alt={alt}/>
    </div>
  )
}

export default Contactimage