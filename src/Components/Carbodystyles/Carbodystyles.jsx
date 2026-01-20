import React from 'react'
import { useData } from '../../Context/Context'
import "./carbodystyle.scss"
const Bodystyle = () => {
  const { Cartypes, setSelectedBodyStyle } = useData()
  return (

    <div className="bodystyles__container">
      <div className="bodystyles">
        <h1>Select a Body Style</h1>
        <div className="cartypes">
          {Cartypes.map((item) => (
            <div key={item.id}
              onClick={() => {
                console.log("CLICKED BODY:", item);
                setSelectedBodyStyle(item);
              }}>
              <img
                src={item.image}
                className="car__type-image"
              />
              <h4>{item.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
export default Bodystyle