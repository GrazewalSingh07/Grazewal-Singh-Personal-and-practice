 

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; 
 import { useNavigate } from "react-router-dom";
 


import "./ProductDetails.css"


//Icons
import E from "../Images/icons8-e-50.png"
import facebook from "../Images/icons8-facebook-50.png"
import twitter from"../Images/icons8-twitter-50.png"
import t from "../Images/icons8-t-lowercase-26.png"
import email from "../Images/icons8-mail-50.png"
import pen from "../Images/icons8-pen-50.png"
import gift from "../Images/icons8-gift-50.png"
import pintrest from "../Images/icons8-pinterest-50.png"
import save from "../Images/icons8-save-30.png"
import dollar from "../Images/icons8-us-dollar-24.png"
//Icons

import { CartContext } from "../context/cartContext"
import { useContext } from "react"

export const ProductDetail = () => {
    let {name,id}=useParams()
    const {getCart}=useContext(CartContext)
    const navigate=useNavigate()
    const [data, setData] = useState({});
    const[likedata,setlikeData]=useState([])

    const getLikeData=async()=>{
        let res = await fetch(`https://shop-clone-api.herokuapp.com/products/${name}?pagesize=4`);
        let mightlikedata = await res.json();
       setlikeData(mightlikedata.product)
         
    }
    async function getData() {
        let fetchdata = await fetch(`https://shop-clone-api.herokuapp.com/products/${name}`);
        let res= await fetchdata.json();
        let curr=res.product.find(element => element._id ==id);
        
        setData(curr);
         
    }
  
    useEffect(() => {
        getData();
        getLikeData();
    }, []);
    // const Authtoken= JSON.parse(localStorage.getItem("Authtoken"))
    const postData=async(el)=>{
        const Authtoken= JSON.parse(localStorage.getItem("Authtoken"))
        if(!Authtoken){
            navigate("/signin",{replace:false})
            alert("Please login first")
            return
        }
         try {
            await fetch("https://shop-clone-api.herokuapp.com/carts",{
                method:"POST",
               
                headers:{
                    "Content-Type":"application/json",
                    Authorization: `Bearer ${Authtoken}`
                },
                body:JSON.stringify(el)
            })
            getCart()
            alert("Added to cart")
         } catch (error) {
             console.log(error)
         }
       
    }
    function AddtoCart(el){
    
            let postingProd= {
                imageurl:el.imageurl||"",
                Category:el.Category||"",
                Brand: el.Brand||"",
                Name: el.Name||"",
                price:el.price||0,
                typeofproduct: el.typeofproduct||"",
                Manufacturer: el.Manufacturer||"",
                styleType:el.styleType||"",
                sizeorigin: el.sizeorigin||0

            }
      
         postData(postingProd)
        
    }
    function ProductDetailPage(id){
        
        navigate(`/product/${name}/${id}`, {replace:false})
        window. location. reload()
    }
    return <main >
        <section className="Prod_detail_main_div">
            <div className="prodImage"><img src={data.imageurl} alt={data.Name} /></div>
            <div className="right_div">
                <div className="firstdiv">
                    <h1 className="heading_h1"style={{fontWeight:700}}>{data.Name}</h1>
                    <p>{data.Brand}</p>
                    <p>Write a review</p>
                </div>
                <div className="price_div">
                    <p>You Save: $28.38 - $49.31 (21.0% - 36.5%)</p>
                    <h1>${data.price}</h1>
                    <div className="interest_sezzle">
                        
                        <div className="interest">or 4 interest-free payments of $26.66 withimg<img className="sezzle" src="https://media.sezzle.com/branding/2.0/Sezzle_Logo_FullColor.svg" alt="#" /></div> 
                        
                    </div>
                    <div className="cryptocheckout">
                         <img className="small_Image_In_Detail" src="https://bitpay.com/cdn/merchant-resources/bitpay-accepted-card-group.svg" alt="#" /><p className="crypto-para">Now accepting Crypto at Checkout!</p>
                    </div>
                 </div>
                 <div className="quantity_div">
                                        <p>Color:</p>
                                        <p> Size</p>
                                        <label htmlFor="quty">qty</label>
                                        <select name="" id="">
                                            <option value="">1</option>
                                            <option value="">2</option>
                                            <option value="">3</option>
                                            <option value="">4</option>
                                            <option value="">5</option>
                                            <option value="">6</option>
                                            <option value="">7</option>
                                            <option value="">8</option>
                                            <option value="">9</option>
                                            <option value="">10</option>
                                        </select>
                                        <button onClick={()=>AddtoCart(data)} className="Addtocartbtn">Add to Cart</button>
                                    </div>
                                    <div className="zip_calculate">
                                        <input  className="Zip_Code_input"type="number" placeholder="zip code" />
                                        <div className="calculate"><button className="calculate-Shipping">Calculate Shipping</button></div>
                                    </div>
                                    <div><p  className="paragraph">MSK Womens Embellished 3/4 Sleeve Point Collar Short Shift Wear To Work Dress</p></div>
                                   

                            
            </div>
            <section className="side_bar">
                <div><p>Add to...</p></div>
                <div className="side_bar_div" >

                    <div className="eachIcon"><img src={pen} alt="pen" /></div>
                    <div className="eachIcon"><img src={t} alt="t" /></div>
                   <div className="eachIcon"> <img src={dollar} alt="$" /></div>
                  <div className="eachIcon">  <img src={E} alt="E" /></div>
                   <div className="eachIcon"> <img src={gift}alt="gift" /></div>
                  <div className="eachIcon">  <img src={save} alt="save" /></div>
                  <div className="eachIcon"> <img src={email} alt="email" /></div> 
                   <div className="eachIcon"><img src={facebook}alt="facebook" /></div> 
                <div className="eachIcon"><img src={twitter} alt="twitter" /></div>
                  <div className="eachIcon"><img src={pintrest}alt="pintrest" /></div>  
                </div>
               
            </section>
        </section>
       

         
         <div className="thought"><h1>We thought you may like:</h1></div>
                            <div className="extra_products">
                               {likedata.map((el)=>(
                                   <div  key={el._id}onClick={()=>{ProductDetailPage(el._id)}} className="extra_products_card">
                                       
                                       <img src={el.imageurl} alt={el.Name} />
                                        
                                        <p>{el.Name}</p>
                                        <p>$ {el.price}</p>
                                        <p>+ ${el.price*3/100} <img style={{width:"5%"}}src="https://pngimg.com/uploads/dollar_sign/dollar_sign_PNG21539.png" alt="" />Cashback</p>
                                        <p style={{fontSize:"12px",lineHeight:"14.4px",color:"#00A8CA"}}>Free shipping</p>
                                   </div>
                               ))}
         </div>
         <div className="product_info">
                                <h1>Product Information</h1>
                                <hr />
                                <p>SKU: P2587561</p>
                                <h4 style={{fontWeight:700}}>Palladium Mens Pampa Lite Leather Waterproof Hiking Boots</h4>
                                
                                   <p> <b>Manufacturer: </b>{data.Name}</p>
                                   <p><b>Suggested Price: </b>{data.price}</p>
                                    <p><b>Condition: New</b></p>
                                
         </div>
        
    </main>
};