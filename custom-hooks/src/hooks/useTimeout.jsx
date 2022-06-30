import { useEffect, useState } from "react"

export const useTimeout=(delay)=>{
    const [ready,setready]=useState(false)
    useEffect(()=>{
        let timeout=setTimeout(()=>{
            setready(true)
        },delay)
    },[delay])
    return {ready}
}