import { auth, loginUser } from "../redux/action"
import { useEffect, useState } from "react"
import {useSelector,useDispatch} from "react-redux"
import { useNavigate } from "react-router-dom"

 export const Login=()=>{
     const navigate=useNavigate()
    const [text,setText]=useState("")
    const [users,setUsers]=useState([])
    const user =useSelector((store)=>store.user)
     const currAuth=useSelector((store)=>store.auth)
    const dispatch=useDispatch()
   const getData=async()=>{
        let res= await fetch(`http://localhost:8080/users`)
        let data=await res.json()
         setUsers(data)
   }
   useEffect(()=>{
       getData()
   },[])
    function Login(){
        
        let x=users.filter((el)=>{
            if(el.username==text){
                return el
            }
           })
      dispatch(loginUser(x))
    //    console.log(x[0].username)
      dispatch(auth(true))
      if(text!=="admin"){
        navigate(`/client/${x[0].username}`,{replace:false})
      }
     else{
        navigate(`/admin`,{replace:false})
     }
    }
    
     return <div>
         <input type="text" placeholder="username" onChange={(e)=>setText(e.target.value)}/>
         <input type="text" placeholder="password"/>
         <button onClick={()=>Login()}>Login</button>
         
     </div>
 }