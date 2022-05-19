import axios from "axios"
import React, { useState } from "react"
 

const getGitHubUsers=(q="albseb",page=1)=>{
    return axios("https://api.github.com/users",{
        method:"GET",
        q,
        per_page:5,
        page
    })
}
export const Users=()=>{
    const [loading,setLoading]=useState(true)
    const [query,setQuery]=useState("masai")
    const [data,setData]=useState([])
    const [page,setPage]=useState(1)
    const [error,setError]=useState(false)

    React.useEffect(()=>{
        setLoading(true)
        getGitHubUsers(query,page)
        .then((res)=>{
            setLoading(false);
            setData(res.data);
            console.log(res.data)
            
        }).catch((err)=>{
            setLoading(false)
            setError(true)
        })
    },[query,page]);
    const handleClick=(query)=>setQuery(query)
    return (
        <div>
            <h2>Github Users</h2>
            
            {data.map((item)=>(
                <div>
                     <img style={{width:"100px"}}src={item.avatar_url} alt="" />
                    <p>{item.login}</p>
                </div>
            
            ))}
        </div>
    )

    

fucnt


}