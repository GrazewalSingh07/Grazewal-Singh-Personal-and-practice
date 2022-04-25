import { useState } from "react"

export const Login=()=>{



    const [formData, setFormData] = useState({
        
        email:"",
        password:""
      
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
        
        fetch("http://localhost:8080/admin/",{
          method:"POST",
          headers:{"Content-Type":"application/json"},
          body:JSON.stringify(formData)
        })
        }



    return ( <form onSubmit={handleSubmit}>
         
        
        <input onChange={handleChange} id="email"type="email" placeholder='Enter email' />
        <input onChange={handleChange} id="password"type="text" placeholder='Enter Password' />
        <input value="submit" type="submit"/>
        </form> )
   }