import { createContext, useState} from "react";

export const AuthContext=createContext()

export const AuthContextProvider=({children})=>{
    const [Auth,setAuth]=useState(true)
    
    function handleAuth(){
        
        if(JSON.parse(localStorage.getItem("Authtoken"))){
            setAuth(true)
        }
        else{
            setAuth(false)
        }
    }
   
     
   
    return (<AuthContext.Provider value={{Auth,handleAuth}}>{children}</AuthContext.Provider>)
}
