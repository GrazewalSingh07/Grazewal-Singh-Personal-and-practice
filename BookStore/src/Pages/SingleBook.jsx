import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux/es/exports"
import axios from "axios"
import { findOneBook, Onedata } from "../Redux/Data/action"
export const SingleBook=()=>{
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const {id}=useParams()
    const data=useSelector((state)=>state.data.onedata)
   
    useEffect(()=>{
       dispatch(findOneBook(id))
    },[id])
 
    return <div>
        <h1>Title : {data?.book_name}</h1>
        <img style={{width:"20rem"}}src={data?.cover_photo}alt="" />
        <h2>Author : {data?.author}</h2>
        <h2>No. of chapters : {data?.no_of_chapters}</h2>
        <h2>Category : {data?.category}</h2>
         {data?.chapters.map((el)=>
         <div key={el.pages} style={{display:"flex"}}>
            <p style={{margin:"1rem"}}>Name: {el.name}</p>
            <p style={{margin:"1rem"}}>Pages: {el.pages}</p>
         </div>)}
         <h2>Year of release : {data?.release_year}</h2>
         <button onClick={()=>navigate(-1)}>Go back</button>
    </div>
}