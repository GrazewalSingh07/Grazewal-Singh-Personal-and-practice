import "./navbar.css"
import { Link } from "react-router-dom"

export const Navbar=()=>{
   let  nav=["Home","EmployeeList","Admin","login"]
    return (
     
       <div className="links">
            {nav.map((e,i)=>(
            <Link   key ={i} to={e} style={{margin:"5px"}}>{e}</Link>
        ))}
  
       </div>
    )
}
