import { useState } from "react"
import { useSelector,useDispatch } from "react-redux"
// import { incrementCount } from "../Redux/counter/action"

export const Counter=()=>{
    const dispatch=useDispatch()
    const count= useSelector((state)=>{return state.count})
   function handlecount(val){
     if(val>0){
        dispatch({type:'INCREAMENT_COUNT'})
     }
     else{
        dispatch({type:'DECREMENT_COUNT'})
     }
     
   }
    return (
        <div>
            count : {count}
            <button onClick={()=>handlecount(1)}>Inc</button>
            <button onClick={()=>handlecount(-1)}>Dec</button>
        </div>
    )
}