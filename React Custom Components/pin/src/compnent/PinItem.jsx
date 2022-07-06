import { forwardRef, useState } from "react"

export const PinItem=forwardRef(({isdisabled,onChange,onBackSpaceHandler},ref)=>{
    const [color,setcolor]=useState("black")
    if(isdisabled){
        // setcolor("green")
    }
    const handlekeyup=(e)=>{
        // if backspace is clicked perform this action
        //else 
        // call the onchange
        if(e.keyCode===8){
            onBackSpaceHandler(e)
        }
        else{
            onChange(e)
        }
    }
 
    return(
        <input  className={isdisabled?"green":null}   ref={ref}
        disabled={isdisabled}
            maxLength={1}
            // onChange={onChange}
            onKeyUp={handlekeyup}
            />
    )
})