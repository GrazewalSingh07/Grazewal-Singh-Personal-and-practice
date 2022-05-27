import axios from "axios"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useState } from "react"
export const User=()=>{
    const params =useParams()
    const [loading,setLoading]=useState(true)
    const [data,setData]=useState(null)
    useEffect(()=>{
        setLoading(true);
        axios({
            url:`http://reqres.in/api/users/${params.id}`,
        method:"GET"}).then((res)=>{
            setLoading(false)
            setData(res.data.data)
        }).catch((err)=>{
            setLoading(false)
        })
    },[params.id])
    return <div>
        <img src={data?.avatar} alt="" />
        <p>{data?.first_name}</p>
        <p>{data?.email}</p>
    </div>
}