import { useDispatch } from "react-redux/es/hooks/useDispatch"
import { useState } from "react"
 
import { RegisterAuthenticate } from "../Redux/Register/action"
export const Register=()=>{

    const dispatch=useDispatch()
   const [name,setName]=useState("")
   const [email,setemail]=useState("")
   const [password,setpassword]=useState("")


    const RegisterNewUser=()=>{
        dispatch(RegisterAuthenticate({name:name,email:email,password:password,username:name,mobile:"",description:""})).then((result) => {
            
        }) 
         
    }
    return <div>
       <input type="text" value={name} placeholder="enter your name" onChange={(e)=>setName(e.target.value)}/>
       <input type="text" value={email} placeholder="email" onChange={(e)=>{setemail(e.target.value)}} />
       <input type="text"  placeholder="password" value={password} onChange={(e)=>{setpassword(e.target.value)}}/>
       <input type="submit" onClick={RegisterNewUser}  />
    </div>
}