import axios from "axios"
import { useState,useEffect } from "react"

   export const useFetch=(url)=>{
    const [data,setData]=useState(null)
    const [loading,setloading]=useState(false)
    const [error,seterror]=useState(false)
    useEffect(()=>{
        setloading(true)
        axios.get(url).then((res)=>{
            setData(res.data)
            setloading(false)
        }).catch((err)=>{
            seterror(true)
        })
      
    },[url])
    return {loading,data,error}
   
}