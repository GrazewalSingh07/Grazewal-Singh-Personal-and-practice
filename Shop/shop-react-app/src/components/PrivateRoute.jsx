import { AuthContext } from "../context/AuthContext"
import { useContext } from "react"
import { Navigate } from "react-router-dom"
 
export const PrivateRoute=({children})=>{
    const {Auth}=useContext(AuthContext)
    if(!Auth){
        return Navigate("/signin",{replace:false})
    }
    
        return children
    
}