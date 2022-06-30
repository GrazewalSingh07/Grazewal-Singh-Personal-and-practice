import { useSelector } from "react-redux/es/exports"
import { Navigate} from "react-router-dom"
export const PrivateRoute=({children})=>{
  
    const isAuth=useSelector((state)=>state.auth.token)
  
    if(isAuth!=null){
        return children
    }
      return <Navigate to="/login"/>
    
    
}