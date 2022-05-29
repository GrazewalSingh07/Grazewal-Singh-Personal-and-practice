import axios from "axios"
import React, { useState } from "react"
 

const getGitHubUsers=(q="albseb",page=12)=>{
    return axios("https://api.github.com/search/users",{
        method:"GET",
        params:{
            q,
            per_page:5,
            page
        }
        
    })
}  
export const Users=()=>{
    const [loading,setLoading]=useState(true)
    const [query,setQuery]=useState("react")
    const [data,setData]=useState([])
    const [page,setPage]=useState(1)
    const [error,setError]=useState(false)
    const [text,setText]=useState("")
    const [pagelimit,setpagelimit]=useState(5)
    React.useEffect(()=>{
        setLoading(true)
        //  axios.get(`https://api.github.com/users`,{
        //      params:{
        //          q:query,
        //          page:page,
        //          per_page:pagelimit
        //      }
        //  })

       getGitHubUsers(query,page).then((res)=>{
            setLoading(false);
            setData(res.data.items);
            console.log(res.data)
            setError(false)
            
        }).catch((err)=>{
            setLoading(false)
            setError(true)
        })
    },[query,page]);


    const handleClick=()=>{
        setQuery(text)
    console.log(query)}


    return (
        <div>
            <h2>Github Users</h2>
            <input value={text} type="text" placeholder="query" onChange={(e)=>{setText(e.target.value)}}/>
            <button onClick={handleClick}>Submit</button>
            
            {data?.map((item)=>(
                <div key ={item.node_id}>
                     <img style={{width:"100px"}}src={item.avatar_url} alt="" />
                    <p>{item.login}</p>
                </div>
            
            ))}
        </div>
    )

}