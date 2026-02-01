import React from 'react'
import"./contactsection.scss"
import Contactimage from"../Contactdetails/Contactimage/Contactimage"
import Content from '../Contactdetails/Content/Content';
import{data}from"../../Utility/contactdetails/contactdetails"
const Contactsection = () => {
  return (
   <div className="contactsection__container">
    <div className="contact__section">
<Contactimage image="images/contactimage.png" alt="contactimage"/>
<Content data={data}/>
</div>
   </div>
  )
}

export default Contactsection