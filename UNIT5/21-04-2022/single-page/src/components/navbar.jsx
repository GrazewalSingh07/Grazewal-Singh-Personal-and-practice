
import { Link } from "react-router-dom"

export const Navbar=()=>{
   let  nav=["Home","About","Products"]
    return (
    // <div>
    //     <a href="/">Home</a>
    //     <a href="/about">About</a>
    //     <a href="/products">Products</a>
    // </div>
    
        nav.map((e,i)=>(
            <Link key ={i} to={e} style={{margin:"5px"}}>{e}</Link>
        ))
  
    )
}
