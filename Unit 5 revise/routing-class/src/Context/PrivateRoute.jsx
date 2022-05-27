import {useContext} from"react"
import{Navigate,Route} from "react-router-dom"
import{AuthContext} from "../Context/AuthContext"
// codesandbox.io/s/compassionate-fermi-pspk6j?file=/src/Routes/Login.jsx


function PrivateRoute({children}){
    const [isAuth]=useContext(AuthContext)
    if(isAuth){
        return children
    }
    return <Navigate to= "./login"/>

}
export default PrivateRoute