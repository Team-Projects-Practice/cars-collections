import { createContext, useContext, useState } from "react";
import { list } from "../Components/data";
const CartypeContext = createContext();
export const CartypeProvider = ({ children }) => {
  const [selectedBodyStyle, setSelectedBodyStyle] = useState(null);

  return (
    <CartypeContext.Provider
      value={{
        Cartypes: list,   
        selectedBodyStyle,
        setSelectedBodyStyle,
      }}
    >
      {children}
    </CartypeContext.Provider>
  );
};

export const useData = () => useContext(CartypeContext);
