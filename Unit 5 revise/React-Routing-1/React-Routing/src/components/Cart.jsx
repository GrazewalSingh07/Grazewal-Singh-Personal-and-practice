import { useContext } from "react"
import { AppContext } from "../Context/AppContext"

export const Cart=()=>{
    const [cart,products,error,loading,dispatch]=useContext(AppContext)
    return <div>
        Cart
        <>
        {cart?.map((el)=>(
            <div key ={el.id}>
                 <img src={el.image} alt="" />
            </div>
           
        ))}
        </>
    </div>
}