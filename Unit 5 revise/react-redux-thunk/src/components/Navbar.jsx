import {Link} from "react-router-dom"

export const Navbar=()=>{
    return <div style={{margin:"1rem"}}>
        <Link style={{margin:"1rem"}} to="/">Dashbord</Link>
        <Link style={{margin:"1rem"}} to="/register">Register</Link>
        <Link  style={{margin:"1rem"}}to="/signin">Sign in</Link>
    </div>
}