import { createContext, useState ,useEffect} from "react";

export const CartContext=createContext()

export const CartontextProvider=({children})=>{
    const [cart,setCart]=useState([])

    const Authtoken= JSON.parse(localStorage.getItem("Authtoken"))
    const getCart=async()=>{
        
            if(!JSON.parse(localStorage.getItem("Authtoken"))){
                return
            }
            else{
                try {
                    let res= await fetch(`https://shop-clone-api.herokuapp.com/carts`,{
                        headers:{
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${Authtoken}`,
                        }
                   })
            
                    let data=await res.json()
                //    console.log(data)
                    handleCart(data)
                } catch (error) {
                    
                }
            }
        
    }
        useEffect(()=>{
            getCart()
            
        },[])

    function handleCart(el){
         setCart(el)
    }
   
    return (<CartContext.Provider value={{cart, handleCart,getCart}}>{children}</CartContext.Provider>)
}
