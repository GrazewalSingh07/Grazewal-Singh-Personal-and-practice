import { useEffect, useState } from "react"
import axios from "axios"
import {ProductDetail} from "./productDetail"
import {Link} from "react-router-dom"

export const Product=()=>{
        const [products, setproducts]=useState([])
    useEffect(()=>{
        
        axios.get("https://fakestoreapi.com/products").then(({data})=>{
            // console.log(data)
            setproducts(data)
        })
    },[])
    return (
        
        <div>
              <h1>Products here</h1>
            {
                
            products.map((el)=>(
                
               <Link to={`/product/${el.id}`} > <img src={el.image} style={{margin:"15px", width:"200px"}} alt="#" /></Link> 
            ))
        
            }
            
        </div>
    )
}