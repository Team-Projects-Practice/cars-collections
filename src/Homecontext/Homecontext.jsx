import { createContext, useContext, useState } from "react";
import{list}from"../Utility/cartypes"
const CartypeContext = createContext();
export const CartypeProvider = ({ children }) => {
  const [selectedBodyStyle, setSelectedBodyStyle] = useState(null);

  return (
    <CartypeContext.Provider
      value={{
        cartypes: list,   
        selectedBodyStyle,
        setSelectedBodyStyle,
      }}
    >
      {children}
    </CartypeContext.Provider>
  );
};

export const useData = () => useContext(CartypeContext);
