import { Link } from "react-router-dom"
export const Navbar=()=>{

    return (
        
        <nav style={{ margin:"auto", display:"flex" , justifyContent:"space-around" , width:"400px"}}>
             <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/users">Users</Link>
            <Link to="/Login">Login</Link>
        </nav>
       
       
    )
}


//Link => like a tog
//Route=>Where the UI gets shown
//Navigate is redirecting a user