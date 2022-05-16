import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Drawer, Button, Space, Divider } from 'antd';
import { useNavigate } from 'react-router-dom';
import "./CartSlide.css"
import { CartContext } from "../context/cartContext"
import { useContext } from "react"
export const CartSlide = () => {
  const {cart}=useContext(CartContext)  
  const navigate=useNavigate()
  const [visible, setVisible] = useState(false);
  const [size, setSize] = useState();
//  console.log(cart)
 

  const showLargeDrawer = () => {
    if(!JSON.parse(localStorage.getItem("Authtoken"))){
      navigate("/signin",{replace:false}),onClose()
      alert ("Please Login" )
    }
    setSize('large');
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
function OpenCart(){
  // if(!JSON.parse(localStorage.getItem("Authtoken"))){
  //   navigate("/signin",{replace:false}),onClose()
  //   alert ("Please Login" )
  // }
  // else{
    navigate("/cart",{replace:false}) ,onClose()
  // }
 
  
}
  return (
    <>
      <Space>
        
        <button onClick={showLargeDrawer}>
         Cart
        </button>
      </Space>
      <Drawer
        title={`Shopping Cart`}
        placement="right"
        size={size}
        onClose={onClose}
        visible={visible}
         
      >
        {cart.length===0 ? <div> <div className='Cart-Slide-Detail'>
          <h2>Your shopping cart is empty.</h2>
            <p><b>Continue Shopping</b> to add items to your cart.</p>
           <button className="cartSlidePaymentOptionbtn">Payment Options / Save for Later</button>
          </div>
          
            <button className='Cart-continue-shopping'>Continue Shopping</button></div> : <div className="cartOnCartSlide">
                {cart.map((el)=>(
                    <div  className="CartCardOnCartSlide" key ={el._id}>
                         
                        <h2 style={{borderBottom:"1px solid black",fontWeight:700}}>Shipment from {el.Brand}</h2>
                         
                        <div>
                          <div >
                              <img className="CartImage"src={el.imageurl} alt="" />
                          </div>
                          <div className="CartCardDetail">
                              <h3 style={{fontWeight:700}}>{el.Name}</h3>
                              <h1>${el.price}</h1>
                              
                          </div>
                          <button className="RemovefromCartbtn" onClick={()=>{RemoveFromCart(el._id)}}>Remove</button>
                        
                        </div>
                        
                    </div>
                
                ))}
                
             <button className='OpenCartButonCartSlide' onClick={OpenCart}>view cart/checkout</button>
            </div> }
         
      </Drawer>
    </>
  );
};

