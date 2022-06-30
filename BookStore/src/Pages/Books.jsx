import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux/es/exports"
import { Navigate, useNavigate } from "react-router-dom"
import { data } from "../Redux/Data/action"
 
import { Link } from "react-router-dom"
import { FilterComponent } from "../components/Filter"
 
export const Books=()=>{
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const books=useSelector((state)=>state.data.data)
    useEffect(()=>{
        dispatch(data())
    },[])
  
    return <div style={{display:"flex"}}>
        <div>
            <FilterComponent/>
           
        </div>
        
        <div >
            <h1>Books</h1>
            <div>{books?.map((el)=>(
            <div key={el.id} style={{background:"teal", display:"flex", color:"white", margin:"1rem", padding:"1rem",cursor:"pointer"}}>
                <img src={el.cover_photo} alt="" />
                <h2>{el.book_name}</h2>
            <Link to={`/book/${el.id}`}> <button style={{color:"black", height:"2rem", width:"5rem", margin:"1rem"}}>Open</button></Link>
            <Link to={`/book/${el.id}/edit`}> <button style={{color:"black", height:"2rem", width:"5rem", margin:"1rem"}}>Edit</button></Link>
            </div>
            )
            )}</div>
        </div>
    </div>
}