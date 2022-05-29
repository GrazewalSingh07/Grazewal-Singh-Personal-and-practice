import axios from "axios"
import { useContext, useEffect } from "react"
import { AppContext } from "../Context/AppContext"
import { SingleProduct } from "./SingleProduct"

export const Products=()=>{
    const [cart,products,error,loading,dispatch]=useContext(AppContext)
    // console.log(cart,products,error,loading,dispatch)
   
    useEffect(()=>{
        dispatch({
            type:"fetch"
        })
        axios({
            url:"http://localhost:8080/products",
            method:"GET",
             
        }).then((res)=>{
            // console.log(res.data)
            dispatch({
                type:"success",
                payload:res.data
            })
        }).catch((err)=>{
            dispatch({
                type:"error"
            })
        })
    },[])
    if(loading){
        return <h1>Loading</h1>
    }
    if(error){
        return <h1>Something went wrong</h1>
    }
    return  <><h1>Products</h1><div style={{display:"grid",
        gridTemplateColumns:"repeat(4,1fr)", gap:"1rem", cursor:"pointer"}}>
       
        <>
        {products?.map((el)=>(
            <div key ={el.id}>
                <SingleProduct {...el}/>
            </div>
        ))}
        </>
    </div>
    </>
}