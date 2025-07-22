import React from 'react';
import ComponentA from "./components/ComponentA";
import { createContext } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const Data = createContext()
// eslint-disable-next-line react-refresh/only-export-components
export const Data1 = createContext()

const AppforContext = () => {
    const name= "Joe"; // prop drilling
    const age = 22;
  return (
    <div>
        <Data.Provider value={name}>
            <Data1.Provider value={age}>
                <ComponentA />
            </Data1.Provider>
        </Data.Provider>
    </div>
  )
}

export default AppforContext
