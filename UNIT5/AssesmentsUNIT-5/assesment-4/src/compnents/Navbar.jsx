import { auth} from "../redux/action"
import { Link } from "react-router-dom"
import {useDispatch,useSelector} from "react-redux"
export const Navbar=()=>{
    const currAuth=useSelector((store)=>store.auth)
     
   
    return <div className="navbar">
            <Link to="/">Home</Link>
            <Link to="login">{currAuth===true? "Logout":"Login"}</Link>
         
    </div>
}