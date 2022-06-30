import { useState } from "react"
import { useDispatch } from "react-redux/es/exports"
import { useParams } from "react-router-dom"
import { patchdata } from "../Redux/Data/action"
export const EditBook=()=>{
     const [author,setauthor]=useState(null)
     const [book_name,setbook_name]=useState(null)
     const {id}=useParams()
     const [cover_photo,setimg]=useState(null)
    const dispatch=useDispatch()
     
    return <>
        <h1>Edit Book</h1>
        <div>
            <input type="text" placeholder="New author name" onChange={(e)=>setauthor(e.target.value)} />
            <input type="text"placeholder="New book name"onChange={(e)=>setbook_name(e.target.value)} />
            <input type="file" placeholder="book image" onChange={(e)=>setimg(URL.createObjectURL(e.target.files[0]))}/>
            <input type="submit" onClick={()=>dispatch(patchdata(id,{author,book_name,cover_photo}))}/>
        </div>
    </>
}