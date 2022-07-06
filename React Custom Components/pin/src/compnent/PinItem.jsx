import { forwardRef } from "react"

export const PinItem=forwardRef(({onChange,onBackSpaceHandler},ref)=>{
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
            maxLength={1}
            // onChange={onChange}
            onKeyUp={handlekeyup}
            />
    )
})