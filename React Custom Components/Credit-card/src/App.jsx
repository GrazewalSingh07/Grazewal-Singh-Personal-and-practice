import { useState } from "react"
import Pin from "./compnent/Pin"
 
import "./App.css"
 

function App() {
 
  const [otp,setOtp]=useState("")
 

  return (
    <div className="App">
       <Pin length={4} SetOtpHandler={(value)=>{setOtp(value)}}/>
       <h4>Your credit card number is {otp}</h4>
    </div>
  )
}

export default App

// when we want to access dom element we can use useRef
//store some mutable data, across the component in life-cycle
// const inputRef= ueRef() {current:}