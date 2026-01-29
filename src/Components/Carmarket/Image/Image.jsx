import React from 'react'
import "./image.scss"
const Image = ({image,alt}) => {
  return (
    <div className="image__container">
      <img src={image} alt={alt}/>
    </div>
  )
}

export default Image