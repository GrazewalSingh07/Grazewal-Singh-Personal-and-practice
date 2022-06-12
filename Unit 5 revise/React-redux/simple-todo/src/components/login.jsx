import { useState } from "react"
import axios from "axios"
export const Login=()=>{

    const [data,setData]=useState({
        email:"",
        password:""
    })
    // "email": "eve.holt@reqres.in",
    // "password": "cityslicka"
    function handleChange(e){
        const {id,value}=e.target
        
        setData({...data,[id]:value})

    }
    function handleSubmit(){
       axios.post("https://reqres.in/api/login",data).then((res)=>{

       }).catch((err)=>{

       })
    }
    console.log(data)
    return (
        <div>
            <input id="email" type="text" placeholder="email" onChange={(e)=>handleChange(e)}/>
            <input id="password" type="text" placeholder="password" onChange={(e)=>handleChange(e)} />
            <button onClick={handleSubmit}> Submit</button>
        </div>
    )
}