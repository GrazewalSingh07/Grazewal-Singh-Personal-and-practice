import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const ClientPage=()=>{
    const [orders,setOrders]=useState([])
    const {name}=useParams();
    const getClient=async()=>{
        let res= await fetch(`http://localhost:8080/orders`)
        let data=await res.json()
        let x=data.filter((el)=>{
            
            if(el.owner_name==name){
                return el
            }
           })
           setOrders(x)
   }
   useEffect(()=>{
       getClient()
   },[])

    return <div>
        <div>
            <h2>{name}</h2>
           
        </div>
        
           {orders.map((el)=>(
               <div key={el.id}>
                    <h3>{el.problem}</h3>
                    <h3>{el.brand}</h3>
                    <p>{el.cost}</p>
               </div>

              

           ))}
       
    </div>
}