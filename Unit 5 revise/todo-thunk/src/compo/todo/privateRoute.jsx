
import { useSelector,useDispatch } from "react-redux"
import { Navigate } from "react-router-dom"

export const PrivateRoute=({children})=>{
    const value=useSelector((state)=>state.Auth.isLoggedIn)
    console.log(value)
    if(value){
        return children
    }
    else{
        return<Navigate to="/"></Navigate>
    }
}