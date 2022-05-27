
import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import { useNavigate } from "react-router-dom"
export const ShowToken=()=>{
const navigate= useNavigate()
    const [isAuth,setIsAuth,token,setToken]=useContext(AuthContext)
    console.log(token)
    function logout(){
        setIsAuth(false)
        setToken("")
        navigate("/",{replace:true})
    }
    return <>
    <h1>{token}</h1>
    <button onClick={logout}>Logout</button>
    </>
}