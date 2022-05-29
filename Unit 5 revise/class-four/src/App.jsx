 import { useEffect ,useState} from 'react';
import './App.css'
import { Counter } from './component/Counter';

function App() {
  

  
    // const [user,setUser]=useState("albert")
    // const [text,setText]=useState("");

    // const handleUpdate=()=>{
    //   setUser(text)
    // }
    // function subscribe(user){
    //   console.log(`Listening to ${user}`)
    //   const id=setInterval(()=>{
    //     console.log(`checking for messages from ${user}`)
      
    //   },3000)
    //   return ()=>{
    //     clearInterval(id)
    //   }
    // }

    // useEffect(()=>{
    //   const unSubscribe= subscribe(user)
    //   return ()=>{
    //     console.log(`unsubscribing from ${user}`)
    //     unSubscribe()
    //   }
    // },[user])
    // console.log("render")

  return (
    <div className="App">
      <div>
         {/* <input type="text" onChange={(e)=>setText(e.target.value)} value={text}/>
         <button type='submit' onClick={()=>handleUpdate}>Update</button> */}
          <Counter/>
      </div>
    </div>
  )
  }



export default App
