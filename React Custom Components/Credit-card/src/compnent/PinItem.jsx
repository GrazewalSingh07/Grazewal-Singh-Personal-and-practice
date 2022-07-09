import { forwardRef, useState } from "react"
import PropTypes from "prop-types"
export const PinItem=forwardRef(({length,onChange,onBackSpaceHandler},ref)=>{
    const [color,setcolor]=useState("black")
     
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
        <input ref={ref}
         
            maxLength={length}
            // onChange={onChange}
            onKeyUp={handlekeyup}
            />
    )
})

PinItem.propTypes={
    length:PropTypes.number.isRequired
}