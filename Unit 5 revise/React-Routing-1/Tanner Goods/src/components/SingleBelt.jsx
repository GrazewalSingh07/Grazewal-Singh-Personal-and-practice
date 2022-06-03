 import axios from "axios"
import { useEffect } from "react"
import "./SingleProd.css"
 import { useNavigate } from "react-router-dom"
 export const SingleBelt=({id,images,title,price,colors,Sizes,Quantity,Description,Sizing_Info,image,Returns_Exchange})=>{
    
    const navigate=useNavigate()
    function handleDetailPage(){
        console.log(id,images,title,price,colors,Sizes,Quantity,Description,Sizing_Info,image,Returns_Exchange)
        navigate(`/product/belt/${id}`)
    }
     return (
         <div  onClick={handleDetailPage} className="Singlepro">
            <img src={images[0]} alt="" />
                
                <h3>{title}</h3>
                <h4>$ {price}</h4>
                <h3>TANNER GOODS</h3>
         </div>
     )
 }