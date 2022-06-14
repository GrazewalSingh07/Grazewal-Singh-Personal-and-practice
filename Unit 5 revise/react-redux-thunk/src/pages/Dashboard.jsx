import {   useEffect, useState } from "react"
import { useDispatch,useSelector } from "react-redux"
import { fetchUsers } from "../Redux/GithubUser/action"

export const Dashboard=()=>{
    const [page,setpage]=useState(1)
    const dispatch=useDispatch()
    const user=useSelector((state)=>state.user.user)
    const isLoading=useSelector((state)=>state.user.isLoading)
    const [search,setsearch]=useState("")

    function searchUser(){
        dispatch(fetchUsers(page,search))
        
    }
     
    useEffect(()=>{
        dispatch(fetchUsers(page,search))
    },[page])
    return <div> 
       <h1> Search for GitHub Users</h1>
       <input type="text" placeholder="search" onChange={(e)=>setsearch(e.target.value)}/>
       <input type="submit" onClick={searchUser} />

       {isLoading?<h1>Loading</h1>:user?.map((el)=>(
        <div key={el.id}>
            <h2>{el.login}</h2>
        </div>
       ))}
      <div>
        <button onClick={()=>page==0?setpage(0):setpage(page-1)}>prev</button>
        <button onClick={()=>setpage(page+1)}>next</button>
      </div>
    </div>
}