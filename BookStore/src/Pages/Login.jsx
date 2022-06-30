import { useState } from "react"
import { useDispatch, useSelector } from "react-redux/es/exports"
import { useNavigate } from "react-router-dom"
import { authenticate } from "../Redux/Auth/action"
export const Login=()=>{
    const [email,setEmail]=useState("eve.holt@reqres.in")
    const [password,setPassword]=useState("cityslicka")
    const error=useSelector((state)=>state.auth.error)
    const navigate=useNavigate()
    const dispatch=useDispatch()
    function login(){
        dispatch(authenticate({email,password})).then(()=>navigate("/")).catch((err)=>alert(error))
    }
   return <div>
        <input value={email} type="text" placeholder="email" onChange={(e)=>setEmail(e.target.value)}/>
        <input value={password} type="text" placeholder="password"onChange={(e)=>setPassword(e.target.value)} />
        <input type="submit" onClick={login} />
    </div>
}