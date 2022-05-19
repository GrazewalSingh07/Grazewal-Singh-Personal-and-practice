import { useRef,useEffect, useState} from "react";

export const    InputBox=()=>{
    const inputRef=useRef(null)
    useEffect(()=>{
        console.log(inputRef)
    },[])
    const handleFocus=()=>{
        inputRef.current.focus()
    }
    return (
        <div>
            
        </div>
    )
}