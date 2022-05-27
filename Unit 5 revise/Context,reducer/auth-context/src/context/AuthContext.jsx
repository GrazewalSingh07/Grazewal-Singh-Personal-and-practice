import React, { Children, useState } from "react";

export const AuthContext= React.createContext()

export const AuthContextProvider=({children})=>{

    const [isAuth,setIsAuth]= useState(false)
     const [token,setToken] =useState("")
    return (<AuthContext.Provider value={[isAuth,setIsAuth,token,setToken]}>
        {children}
    </AuthContext.Provider>)
}