import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Admin=()=>{
    const [orders,setOrders]=useState([])
    const [status,setStatus]=useState(false)
    const getOrders=async()=>{
        let res= await fetch(`http://localhost:8080/orders`)
        let data=await res.json()
        
           setOrders(data)
           console.log(data)
   }
   useEffect(()=>{
       getOrders()
   },[])

    return <div class="admin">
         {orders.map((el)=>(
               <div key={el.id}>
                    <p>{el.id}</p>
                    <h3>{el.problem}</h3>
                    <h3>{el.brand}</h3>
                    <p>{el.cost}</p>
                    <select value={el.status}>
                        <option value="Pending">Pending</option>
                        <option value="Inprogress">Inprogress</option>
                        <option value="Done">Done</option>
                    </select>
                    {el.status===true ? null:<button>Accept</button>}
                    
               </div>

              

           ))}
           
    </div>
}