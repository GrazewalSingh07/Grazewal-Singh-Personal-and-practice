import { useEffect, useState } from "react"
import { ProductCard } from "./ProductCard"


export const ProductList=()=>{

    const [data,setData]=useState([])
 
    useEffect(()=>{

        async function getdata(){
            try {
                let res= await fetch("https://fakestoreapi.com/products")
                let data= await res.json()
               setData(data)
            console.log(data)
            } catch (error) {
                console.log(error)
            }
        }
        getdata()

    },[])

 
    return(

        <div>
            {data.map((el)=>{
              return  <ProductCard key={el.id} {...el}/>
            })}
            
        </div>
        
    ) 
    
}