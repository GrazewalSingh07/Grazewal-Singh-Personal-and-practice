import { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
 import { Link } from "react-router-dom"
export const Users=()=>{
const navigate=useNavigate()
    const [data,setData]=useState([])
    const [loading,setLoading]=useState(true)

    useEffect(()=>{
        axios.get("https://reqres.in/api/users").then((result) => {
            // console.log(result.data.data)
            setData(result.data.data)
            setLoading(false)
        }).catch((err) => {
            console.log(err)
        });
    },[])
 
    return (
        <div>
            {data?.map((el)=>(
                <div key={el.id}>
                     
                    <p>{el.first_name}</p>
                    
                    <Link to={`/user/${el.id}`}>See more</Link>
                </div>
            ))}
        </div>
    )
}