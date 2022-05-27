import { useState } from "react"
import axios from "axios"
import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import { Navigate } from "react-router-dom"
export const Login=()=>{
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
   const [isAuth,setIsAuth,token,setToken]=useContext(AuthContext)

    function handleSubmit(){
        async function login(){
            axios.post("https://reqres.in/api/login",{
                        "email": "eve.holt@reqres.in",
                        "password": "cityslicka"
                    
                
            }).then((res)=>{
               if(res.data.token){
                //   console.log(res)
                let temp=res.data.token
                   setToken(temp)
                   console.log(token)
                   setIsAuth(true)
               }
            }).catch((err)=>{
                console.log(err)
                setIsAuth(false)
            })
        }
        login()
    }


    if(isAuth==true){
        return <Navigate to="/showtoken"/>
    }
      return(
        <>
        <form action="">
            <input type="text" placeholder="email" id="email" onChange={(e)=>{setEmail(e.target.value)}} />
            <input type="text"  id="password" placeholder="password" onChange={(e)=>{setPassword(e.target.value)}} />
        </form>
       <button onClick={handleSubmit}>Login</button>
      </>
        
        
        
    )
}