import React from 'react'
import { createContext, useState } from "react";

export const Contextvalue = createContext();

const Context = ({children}) => {
    const [cart, setCart] = useState([])
  return (
    <Contextvalue.Provider value={{cart, setCart}} >{children}</Contextvalue.Provider>
  )
}

export default Context