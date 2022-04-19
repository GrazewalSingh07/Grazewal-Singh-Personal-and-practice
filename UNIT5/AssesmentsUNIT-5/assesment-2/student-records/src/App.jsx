import { useState } from 'react'
 
import './App.css'
import { AddStudent } from './components/Addstudent'
import { ShowStudents } from './components/Showstudents'

function App() {
  const [signup,setsignup]=useState(false)
  const [data,setData]=useState(true)
  
  return (
    <div className="App">
        <button id="toggle"name="togglebtn" onClick={()=>{setsignup(!signup),setData(!data)}}>Toggle</button>
       {signup?<AddStudent/>:null}
       {data?<ShowStudents/>:null}
    
       
    </div>
  )
}

export default App
