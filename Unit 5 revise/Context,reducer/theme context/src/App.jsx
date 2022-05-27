 
import { useState } from 'react'
import './App.css'
import {useContext} from "react"
import {Apptheme} from "./Context/themeContext"
function App() {
  const [theme,handleTheme]=useContext(Apptheme)
 
  // const [theme,setTheme]=useState("light")
  //   function handleTheme(){
  //     if(theme=="light"){
  //       setTheme("dark")
  //     }
  //     else{
  //       setTheme("light")
  //     }
  //   }

  return (
    <div className={theme}>
       <h1>Theme Context</h1>
       <button  onClick={handleTheme}>{theme=="light"?"dark Mode":"light Mode"}</button>
       <>
       <form action="">
         <input type="text" placeholder='email' />
         <input type="text"  placeholder='password'/>
       </form>
       </>
    </div>
  )
}

export default App
