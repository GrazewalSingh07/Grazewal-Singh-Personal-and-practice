import axios from "axios"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import { useState } from "react"

export const EditTodo=()=>{
    const dispatch=useDispatch()
    const {id}=useParams()
    // console.log(id)
    const [title,settitle]=useState("")
    const navigate=useNavigate()

    const handleupdate=()=>{

       
        axios({
            url:`/todo/${id}`,
            method:"patch",
            data:{
                title:title
            }
        })
        dispatch({type:"PATCH_TODO_TOGGLE"})
        navigate(-1)
    }

    const state=useSelector((state)=>state.details.todos.title)
    console.log(state)
    return <>
    <textarea onChange={(e)=>settitle(e.target.value)} defaultValue={state} name="" id="" cols="30" rows="5">
    </textarea>
    <button onClick={()=>handleupdate()} >update</button>
    <button onClick={()=>navigate(-1)}>Back</button>
    </>
}