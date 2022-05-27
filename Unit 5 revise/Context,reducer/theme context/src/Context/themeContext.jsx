import React, { Children } from "react";
import { useState } from "react";


export const Apptheme= React.createContext()

function AppthemeProvider({children}){
 
    const [theme,setTheme]=useState("light")
    function handleTheme(){
      if(theme=="light"){
        setTheme("dark")
      }
      else{
        setTheme("light")
      }
    }
    return(<Apptheme.Provider value={[theme,handleTheme]}>
            {children}
        </Apptheme.Provider>
    )
}
export default AppthemeProvider