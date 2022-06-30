import {Link} from "react-router-dom"
import { useSelector } from "react-redux/es/hooks/useSelector"
import { useDispatch } from "react-redux/es/exports"
import { LOG_OUT } from "../Redux/Auth/actionTypes"
import { loginSuccess, lOGOUT } from "../Redux/Auth/action"
import { useEffect } from "react"
export const Navbar=()=>{
    const isAuth=useSelector((state)=>state.auth.token)
    const dispatch=useDispatch()
   
    function logout(){
        localStorage.clear()
        dispatch(loginSuccess(null)) 
        
    }
    return <div>
        <Link to="/">Books</Link>
       {isAuth!==null?<button onClick={logout}>Logout </button>:<Link to="/login">Login</Link>} 
      
    </div>
}