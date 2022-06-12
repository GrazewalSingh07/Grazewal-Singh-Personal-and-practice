import { useSelector,useDispatch } from "react-redux"
import { loginSuccess, logoutsuccess } from "../../redux/todo/authAction"

export const Navbar=()=>{
    const value=useSelector((state)=>state.Auth)
    // console.log(value)
    const dispatch=useDispatch()
    const handlelogin=()=>{
        dispatch(loginSuccess())
        // console.log(value)
    }

    const handlelogout=()=>{
        // dispatch(log())
        dispatch(logoutsuccess())
        // console.log(value)
    }
    return <>
        <nav>
            <button onClick={()=>handlelogin()}>Login</button>
            <button onClick={()=>handlelogout()}>log out</button>
        </nav>
    </>
}