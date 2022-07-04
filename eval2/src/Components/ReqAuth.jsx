import { useSelector } from "react-redux/es/exports";
import {Redirect} from "react-router-dom"
import { Navigate } from "react-router-dom";
//Create the HOC for protected Routes
const ReqAuth = (children) => {
      const token=useSelector((state)=>state.auth.data.token)

  console.log(token)
  if(token!=""){
   return <Navigate to="/"/>
  }
    return children
  
    
};

export default ReqAuth;
