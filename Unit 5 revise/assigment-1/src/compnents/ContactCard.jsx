
import { useState } from "react"
// import Contacts  from "../data"


export const ContactCard=({image,name,email,phone,id})=>{
    console.log(image,name)
    const [showNum,setShowNum]=useState(false)
    const handleShowNum=()=>{
        setShowNum(!showNum)
    }
    return  <div onClick={handleShowNum} style={{display:"flex",margin:"20px",cursor:"pointer",background:"whitesmoke"}} key={id}>
                <div style={{width:"100px",height:"100px",marginBottom:"1.5rem",}}>
                     <img style={{width:"100%",height:"100%", borderRadius:"50%",margin:"10px", objectFit:"cover",position:"relative",display:"block"}} src={image} alt={name} />
                </div>
                
                <div style={{margin:"15px"}}>
                    <h3>{name}</h3>
                    <p>{email}</p>
                  {showNum==false ? null: <p>{phone}</p>} 
                </div>
                
            </div>
         
    
}