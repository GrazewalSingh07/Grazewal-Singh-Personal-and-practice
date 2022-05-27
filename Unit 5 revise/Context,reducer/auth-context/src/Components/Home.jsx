import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import { Navigate } from "react-router-dom"

export const Home=()=>{
    const [isAuth,setIsAuth]=useContext(AuthContext)
     
    return(<>
        <h1>Welcome</h1>
       <button onClick={setIsAuth(false)}>Logout</button>
        </>
    )
}