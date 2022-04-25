import { useState } from "react"
import "./home.css"
export const Home=()=>{

const [promoted,setPromoted]=useState(0)
const [Terminated,setTerminated]=useState(0)
const [New,setNew]=useState(0)
const [Employee,setEmployee]=useState(0)
    return (<div>
        <a href="#">Stats</a>
       <h1>Welcome to employee management system</h1>

       <ul>
           <li><p>Total Employee <p>{Employee}</p></p></li>
           <li><p>Total Terminated <p>{Terminated}</p></p></li>
           <li> <p>Total Promoted <p>{New}</p></p></li>
           <li><p>Total New <p>{promoted}</p></p></li>
       </ul>
        
        
       
        
        
    </div>)
   }