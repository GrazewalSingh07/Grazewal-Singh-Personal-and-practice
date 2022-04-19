import { useEffect, useRef, useState } from 'react'
import logo from './logo.svg'
import './App.css'
 

function App() {


 const [formData, setFormData] = useState({
  name:"",
  age:"",
  email:""

})

function handleChange(e){
  const {id,value}=e.target
  setFormData({
    ...formData,
    [id]:value
  })
}
function handleSubmit(e){
e.preventDefault()

fetch("http://localhost:4000/users/",{
  method:"POST",
  headers:{"Content-Type":"application/json"},
  body:JSON.stringify(formData)
})
}
  return (
    <form onSubmit={handleSubmit}>
<input onChange={handleChange} id="name"type="text" placeholder='Enter username' />
<input onChange={handleChange} id="age"type="Number" placeholder='Enter Age' />
<input onChange={handleChange} id="email"type="email" placeholder='Enter email' />
<input value="submit" type="submit"/>
</form> 
  )
}




export default App


{/* <div className="App">
<h3>Counter: {counter}</h3>
<button onClick={()=>{
  clearInterval(counterRef.current)
}}>Pause</button>
<button onClick={()=>{
   startInterval()
}}>Start</button>
<button onClick={()=>{
   clearInterval(counterRef.current)
   startInterval(0)
}}>Reset</button>
</div> */}
// const [counter,setCounter]=useState(0)
// const counterRef=useRef(null) //{current:null}

// useEffect(()=>{
//   counterRef.current=setInterval(()=>{
//     setCounter((p)=>p+1)
//   },1000)
// },[])