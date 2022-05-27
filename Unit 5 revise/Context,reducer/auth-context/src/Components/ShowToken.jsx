
import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
export const ShowToken=()=>{

    const [isAuth,setIsAuth,token]=useContext(AuthContext)
    console.log(token)
    return <>
    <h1>{token}</h1>
    </>
}