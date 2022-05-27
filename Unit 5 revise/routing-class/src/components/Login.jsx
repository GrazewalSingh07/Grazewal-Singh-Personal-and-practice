import { useState } from "react"

import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { AuthContext } from "../Context/AuthContext"
export const Login=()=>{
        const[isAuth,setIsAuth]=useContext(AuthContext)
        console.log(isAuth)
    const [username,setusername]=useState("")
    const [password,setPassword]=useState("")
    function handleText(){
       e.preventDefault()  
        const [id,value]= e.target
        console.log(id,value)
    //     setText({...text},
    //         text[e.target.id]= e.target.value)
    //    console.log(text)
    }
    function handlesubmit(){
        if(username=="admin"&&password=="admin"){
            setIsAuth(true)
        }
        else{
            alert ("Wrong Password")
        }
    }
     if(isAuth){
         return<Navigate to="/users"/>
     }
    { isAuth==false ?  <>
        <input value={username} type="text" id="username" placeholder="username" onChange={(e)=>setusername(e.target.value)} />
        <input value={password} type="text" id="password" placeholder="password" onChange={(e)=>setPassword(e.target.value)} />
        <button onClick={handlesubmit}>login</button>
    </>: <Navigate to="/user"/>}
}