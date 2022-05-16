 
import { useEffect,useState } from "react"
 import { useNavigate } from "react-router-dom"
import { CartContext } from "../context/cartContext"
import { useContext } from "react"
import "./Cart.css"
export const Cart=()=>{
    const navigate=useNavigate()
    const {handleCart}=useContext(CartContext)  
    const [price,setprice]=useState(0)
    const [Cartdata,setCartData]=useState([])
  
    
    const getCart=async()=>{
            
            if(!JSON.parse(localStorage.getItem("Authtoken"))){
                navigate("/signin",{replace:false})
                alert("Please login first")
                return
            }
            else{
                try {
                    const Authtoken= JSON.parse(localStorage.getItem("Authtoken"))
                    let res= await fetch(`https://shop-clone-api.herokuapp.com/carts`,{
                    headers:{
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${Authtoken}`,
                    }
                    })
                    let data=await res.json()
                    setCartData(data)
                        
                    if(data.length>=1){
                        let totalPrice=0;
                        for(let i=0;i<data.length;i++){
                            totalPrice+=data[i].price
                        }
                            
                            setprice(totalPrice)
                    }
                        handleCart(data)
                        
                    }
                 catch (error) {
                    console.log(error)
                }
            }
       
    }

       
        useEffect(()=>{
            getCart()
            
        },[])

  function RemoveFromCart(id){
    const Authtoken= JSON.parse(localStorage.getItem("Authtoken"))
    if(!JSON.parse(localStorage.getItem("Authtoken"))){
        navigate("/signin",{replace:false})
        alert("Please login first")
        return
    }
    else{
        fetch(`https://shop-clone-api.herokuapp.com/carts/${id}`,{
        method:"DELETE",
        headers:{
            "Content-Type": "application/json",
            Authorization: `Bearer ${Authtoken}`,
        }
        })
        getCart()
    }
    
  }
  
     
    return <main>
        <h1 style={{fontWeight:700,margin:"1% 1%"}}>Your Cart</h1>

    <section className="flex">
            <div className="cart">
                {Cartdata.map((el)=>(
                    <div  className="CartCard" key ={el._id}>
                         
                        <h2 style={{borderBottom:"1px solid black",fontWeight:700}}>Shipment from {el.Brand}</h2>
                         
                        <div className="CartCardParent">
                        <div >
                            <img className="CartImage"src={el.imageurl} alt="" />
                        </div>
                        <div className="CartCardDetail">
                            <h3 style={{fontWeight:700}}>{el.Name}</h3>
                            <h1>${el.price}</h1>
                            <div className="cartProductDetail">
                                <p>Color:</p>
                                <p>Size:{}</p>
                            </div>
                            <div>
                                Quantity: <input style={{width:"30px"}} type="number"/>
                                    <button style={{backgroundColor:"transparent", border:"none",textDecoration:"underline"}}>update</button>
                            </div>
                        </div>
                        <button className="RemovefromCartbtn" onClick={()=>{RemoveFromCart(el._id)}}>Remove</button>
                        <button className="Saveforlaterbtn" >Save for later</button>
                        </div>
                        
                    </div>
                
                ))}
            </div>
            <div className="total_cart">
                <h2 style={{borderBottom:"1px solid black",margin:"10px 10px 10px 10px"}}>Order Total</h2>
                 <div>
                     <p>Subtotal : $ {price}</p>
                     <div className="interest_sezzle">
                        <div className="interest">or 4 interest-free payments of $26.66 withimg<img className="sezzle" src="https://media.sezzle.com/branding/2.0/Sezzle_Logo_FullColor.svg" alt="#" /></div> 
                    </div>
                    <div className="Cart_zip_calculate">
                         <input  className="Zip_Code_input"type="number" placeholder="zip code" />
                            <div className="calculate"><button className="calculate-Shipping">Estimate Shipping</button></div>
                     </div>
                    <p onClick={()=>{navigate("/")}}> Continue Shopping</p>
                     <button className="Addtocartbtn">Proceed to checkout </button>

                     <p style={{background:"white",padding:"5px",width:"150px",marginLeft:"7%"}}>Or checkout with</p>
                     <div className="otherWaytocheckout">
                         
                         <div className="paymentImages">
                             <img style={{marginTop:"22px"}} src="https://www.paypalobjects.com/webstatic/en_US/i/buttons/ppcredit_MD_BNPOT_1x.png" alt="Paypal-Credit" />
                             <img src="https://www.paypalobjects.com/webstatic/en_US/i/buttons/checkout-logo-medium.png" alt="payPal" />
                         </div>
                         <img src="https://src.mastercard.com/assets/img/btn/src_chk_btn_147x034px.svg?locale=en_us&paymentmethod=master,visa,discover,amex&checkoutid=a4a6w4v6h7cg0iaijxn0j1iaoelnus5936" alt="Visa" />
                     </div>
                 </div>

            </div>
        </section>
    </main>
}