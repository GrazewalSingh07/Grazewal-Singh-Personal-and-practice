import { useState } from "react";
import { authenticate } from "../Redux/Auth/action";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { useNavigate } from "react-router-dom";
export const Signin=()=>{
    const [username,setusername]=useState("");
    const [password,setPassword]=useState("")
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const Signin=()=>{
 
        dispatch(authenticate({password:password,username:username})).then((res)=>{
            navigate("/")
        })
    }
    return <div>
       <input value={username} type="text" placeholder="username" onChange={(e)=>setusername(e.target.value)} />
       <input value={password} type="text" placeholder="password" onChange={(e)=>{setPassword(e.target.value)}}/>
       <input type="submit" onClick={Signin}/>
    </div>
}