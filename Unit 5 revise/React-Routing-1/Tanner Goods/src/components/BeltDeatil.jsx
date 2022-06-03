import { useParams } from "react-router-dom"
import { useState,useEffect } from "react"
import axios from "axios"
export const BeltDetail=()=>{
    const params=useParams()
    const{id,cat}=useParams()
    console.log(params)
    const [temp,settemp]=useState(null)
    useEffect(()=>{
        axios.get(`http://localhost:8080/${cat}?id=${id}`).then((res)=>{
            console.log(res.data)
            settemp(res.data)
        })


    },[id])
    function addtocart(){
        console.log("hi")
    }
    return (
        <div>
            {temp?.map((el)=>(
                <div>
                     <img src={el.images[0]} alt="" />
                     <button onClick={addtocart}>Add to cart</button>
                </div>
               
            ))}
        </div>
    )
}