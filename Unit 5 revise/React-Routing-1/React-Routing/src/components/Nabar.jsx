import { Link } from "react-router-dom"

export const Navbar=()=>{



    return <div style={{display:"flex", justifyContent:"space-around"}}>
        <Link to="/">Home</Link>
        <Link to ="/about">About</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart</Link>
    </div>
}