
import { useState } from "react"
// import Contacts  from "../data"
import "./ContactCard.css"

export const ContactCard=({image,name,email,phone,id})=>{
    console.log(image,name)
    const [showNum,setShowNum]=useState(false)
    const handleShowNum=()=>{
        setShowNum(!showNum)
    }
    return  <div onClick={handleShowNum} className="ContactCard" key={id}>
                <div className="Image-Container">
                     <img className="image" src={image} alt={name} />
                </div>
                
                <div style={{margin:"15px"}}>
                    <h3>{name}</h3>
                    <p>{email}</p>
                  {showNum==false ? null: <p>{phone}</p>} 
                </div>
                
            </div>
         
    
}