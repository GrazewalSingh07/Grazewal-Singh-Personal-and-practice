import { useEffect,useState } from "react";
import { useRef } from "react/cjs/react.production.min";



export const Counter=()=>{
    const [count, setCount]=useState(10)
     const CounterRef=useRef(null)
useEffect(()=>{
 CounterRef = setInterval(()=>{
      setCount((prevValue)=>{
            if(prevValue<=0 ){
                clearInterval(CounterRef)
               return 0
            }
             
            
                return prevValue-1
        
        });
    }, 1000);
    
    return ()=>{
        clearInterval(CounterRef)
    }
},[count]);

    return(
        <div>
            <h3>
            Count:{count}
            </h3>
            <button onClick={()=>{ clearInterval(CounterRef)}}
            >Pause</button>
            <button onClick={()=> setCount(10)}>Restart</button>
        </div>
    )
}