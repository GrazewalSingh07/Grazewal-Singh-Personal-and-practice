import {   useState } from "react"
import { useDispatch,useSelector } from "react-redux"
import { fetchUsers } from "../Redux/GithubUser/action"

export const Dashboard=()=>{
    const dispatch=useDispatch()
    const user=useSelector((state)=>state.user.user)
    
    const [search,setsearch]=useState("")

    function searchUser(){
        dispatch(fetchUsers(1,search))
        console.log(user)
    }
    return <div> 
       <h1> Search for GitHub Users</h1>
       <input type="text" placeholder="search" onChange={(e)=>setsearch(e.target.value)}/>
       <input type="submit" onClick={searchUser} />
    </div>
}