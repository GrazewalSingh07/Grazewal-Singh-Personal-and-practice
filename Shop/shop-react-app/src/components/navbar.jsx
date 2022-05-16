import { CartSlide } from "./CartSlide"
import { useNavigate } from "react-router-dom"
import { nanoid } from "nanoid"
import { CartContext } from "../context/cartContext"
import { useContext } from "react"
 
export const Navbar=()=>{
    const {cart}=useContext(CartContext)
    
 
   

    const navigate =useNavigate()
    function loadprod(curr){
        navigate(`/products/${curr}`)
        window. location. reload()
    }
    const nav=[ "Men", "Women","Jwellery","Accessories","Footwear"
]
    function logout(){
        console.log("hi")
        window.localStorage.removeItem('Authtoken');
    }
    
    return <div>
                <div>
                <CartSlide/>
                {nav.map((el)=>(
                    <button key={nanoid()} onClick={()=>loadprod(el)}>{el}</button>
                ))}
                 </div>
                <h1>Cart :{cart.length}</h1>
                <button onClick={logout}>Log Out</button>
                <p onClick={()=>navigate("/")}>Home</p>
    </div>
}