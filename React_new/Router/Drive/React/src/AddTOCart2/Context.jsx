import { createContext, useState } from "react";
export const contextProduct = createContext();

const Context = ({ children }) => {
  const [cart, setCart] = useState([]);
  return (
    <contextProduct.Provider value={{ cart, setCart }}>
      {children}
    </contextProduct.Provider>
  );
};

export default Context;
