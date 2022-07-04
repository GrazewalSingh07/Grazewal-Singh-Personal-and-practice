import "./search.css"
import {AiOutlineSearch} from "react-icons/ai"
import { useEffect, useState } from "react"
export const SearchBar=()=>{
    const [search,setsearch]= useState(null)
   
    useEffect(()=>{
       
        return ()=>{
            clearInterval(interval)
        }
    },[])
    return <div className="search">
        <input type="text" placeholder="Search" onChange={(e)=>{setsearch(e.target.value)}}/>
        <AiOutlineSearch  style={{fontSize:"2rem",margin:"0rem 0rem -1rem -3rem"}}/>
    </div>
}