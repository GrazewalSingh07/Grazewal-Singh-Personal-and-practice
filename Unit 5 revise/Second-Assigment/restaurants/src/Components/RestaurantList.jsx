import axios from "axios"
import React, { useState } from "react"
import { AddRestaurant } from "./AddRestaurant"
import { RestaurantDetails } from "./RestaurantDetails"
import "./RestaurantList.css"


export const RestaurantList=()=>{
    const [data,setdata]=React.useState([])
    const [callbackval,setcallbackval]=useState(0)
    const [page,setPage]=useState(1)
    const [maxpage,setmaxpage]=useState(1)
    const [filterpayment,setFilterpayment]=useState("all")
    const [filterStarvalue,setFilterStarvalue]=useState(0)
    // console.log(filtervalue)
    // function Filtervalue(val){
    //         setFiltervalue(val)  
    // }
    function callback(val){
        setcallbackval(val)
    }
    // ?_page=${page}&_limit=5
    React.useEffect(()=>{
        axios.get(`http://localhost:8080/Restaurants`).
        then((res=>{ setdata(res.data)
            setmaxpage((Math.ceil(res.headers["x-total-count"]/4)))}))
    //    async function getdata(){
    //     let res= await fetch(`http://localhost:8080/Restaurants?_page=${page}&_limit=4`)
       
    //     let data= await res.json();
    //     console.log(res.data)
     
        
    //    }
    //  getdata()

    },[callbackval,page])
    function handlepaginate(val){
        
        if(val<0){
            if(page==1){
               setPage(1)
            }
            else{
                setPage(page+val)
            }
        }
        else{
            if(page==maxpage){
                 setPage(maxpage)
            }
            else{
                setPage(page+val)
            }
            
        }
         console.log(page)
    }
    return (
        <div key="ResListKey" className="Container">
            
            <AddRestaurant callback={callback}/>
            <div>
                <h3>Filter by stars</h3>
                <button value="1" onClick={()=>setFilterStarvalue(1)}>1 star</button>
                <button value="2" onClick={()=>setFilterStarvalue(2)}>2 star</button>
                <button value="3" onClick={()=>setFilterStarvalue(3)}>3 star</button>
                <button value="4" onClick={()=>setFilterStarvalue(4)}>4 star</button>
            </div>
            <div>
                <h3>Filter by payment modes</h3>
                <button onClick={()=>{setFilterpayment("Credit/debit card")}} >Card payments available</button>
                <button onClick={()=>{setFilterpayment("Google Pay"||"Apple Pay"||"PayPal")}}>Upi payment available</button>
                <button onClick={()=>{setFilterpayment("cash")}}>Cash payment available</button>
                <button onClick={()=>{setFilterpayment("all")}}>All</button>
            </div>
            <div className="AllRestaurants">
                {data.filter((el)=>{if(el.star>=filterStarvalue){
                    return el
                }})
                .filter((el)=>{if(el.payment_method.includes(filterpayment)){
                    return el
                     }
                     else if(filterpayment=="all"){
                         return el
                     }
                    })
                .map((el)=>(
                <RestaurantDetails {...el} />
                ))}
            </div>
           <div>
               <button onClick={()=>handlepaginate(-1)}>Prev</button>
               <button onClick={()=>handlepaginate(1)}>Next</button>
           </div>
   
        </div>
        
        
    )
}
