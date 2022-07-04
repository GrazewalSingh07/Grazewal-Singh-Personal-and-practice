import { useEffect, useState } from "react"
import { useFetch } from "./useFetch"
import axios from "axios"
export const useSearch=(q,url)=>{
    const [data,setdata]=useState(null)
    useEffect(()=>{
        setTimeout(()=>{
            axios.get(url,{params:{
               "q":q
            }}).then((res)=>{
               setdata(res.data.items)
               console.log(res)
            })
           
       },3000)

    },[q])
    return {data}
}