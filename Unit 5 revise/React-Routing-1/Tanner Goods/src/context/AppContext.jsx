import React, { useState } from "react";

export const AppContext=React.createContext()
export const AppContextProvider=({children})=>{
    const [data,setData]=useState([])
    function handledata(data){
    setData(data)
    }
    return (
        <AppContext.Provider value={[data,handledata]}>{children}</AppContext.Provider>
    )
}