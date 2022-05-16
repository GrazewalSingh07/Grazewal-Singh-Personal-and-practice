import { useEffect, useRef, useState } from "react"
 
import { useNavigate } from "react-router-dom"
import "./products.css"
import {nanoid} from"nanoid"
import { useParams } from "react-router-dom"
import arrow from "../Images/icons8-chevron-right-24.png"
 
 import { Select } from 'antd';
 import { CartContext } from "../context/cartContext"
 import { useContext } from "react"
const { Option } = Select;

function handleChange(value) {
  console.log(`selected ${value}`);
}





export const Products=()=>{
    const {name}=useParams()
   const navigate=useNavigate()
   
    const {getCart}=useContext(CartContext)
 const [data,setData]=useState([])
   const [page,setPage]=useState(1)
   const [pagesize,setpagesize]=useState(10)
  const [showfilter,setShowfilter] = useState(true)
  const [filteredData,setfilteredData]=useState([])
 
  function PageChangeFunction(num){
     if(page==1&&num==-1){
         return
     }
     else if(page==2&&num==1){
         return
     }
    else  if(num==-1){
         setPage(page-1)
     }
     else if(num==1){
         setPage(page+1)
     }
  }
   //showing up results
    const getProducts=async()=>{
        let res= await fetch(`https://shop-clone-api.herokuapp.com/products/${name}?pagesize=${pagesize}&page=${page}`)
        let data=await res.json()
        setData(data.product) 
        setfilteredData(data.product)
        
    }
   
    // console.log(filteredData)
    useEffect(()=>{
        getProducts()
        setfilteredData(data)
    },[page])  

    function filterData(para){
        if(para=="All"){
            window. location. reload()
        }
        let filteredDaata=data.filter((el)=>{
            if(el.typeofproduct==para){
                return el
            }
        })
        setfilteredData(filteredDaata)
    }
   
    //Adding to cart
   
            const postData=async(el)=>{
                const Authtoken= JSON.parse(localStorage.getItem("Authtoken"))
                if(!Authtoken){
                    navigate("/signin",{replace:false})
                    alert("Please login first")
                    return
                }
               else{
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
           
            
        }
    //addtocart function
    function AddtoCart(el){
        let postingProd={
            imageurl:el.imageurl||"",
            Category:el.Category||"",
            Brand: el.Brand||"",
            Name: el.Brand||"",
            price:el.price||"",
            typeofproduct: el.typeofproduct||"",
            Manufacturer: el.Manufacturer||"",
            styleType:el.styleType||"",
            sizeorigin: el.sizeorigin||""

        }
         postData(postingProd)
        
    }
    // /navigating to detail page
    function ProductDetailPage(id){
        navigate(`/product/${name}/${id}`)
    }



    //Setting up filtering side
    const filter_dependencies=useRef(["All"])
   
    // console.log(filter_dependencies.current)
    for(let i=0;i<data.length;i++){
        
        if(filter_dependencies.current.includes(data[i].typeofproduct)){
           continue
        }
        else{
            filter_dependencies.current.push(data[i].typeofproduct)
        }
    } 
 

    return <div className="productParent">
            <div>
                     <div className="historyProductPage">
                        <p>Shop.com<img style={{height:"15px"}}src={arrow} alt="" /> {name}</p>
                    </div>

                    <hr />
                    <div className="sort_section"> 
                            <h3>Sort</h3>
                            <>
                                <Select defaultValue="Best Match" style={{ width: 120, border:"none" }} onChange={handleChange}>
                                <Option value="jack">Low to High</Option>
                                <Option value="lucy">High to Low</Option>
                                <Option value="Yiminghe">Best Cashback</Option>
                                </Select>
                                
                            </>
                    </div>
                    <hr />
            </div>
          
            
            <section className="Bigger_Section_Product">
                <div className="filter-shorting-left-side-main"> 
                     <div className="filter_Section_type">
                         <button className="filter_type" onClick={()=>setShowfilter(!showfilter)}><h1 >Type</h1></button>
                         <section className="filter_type_data">
                             {showfilter&& <div >{filter_dependencies.current.map((el)=>(
                                <p key={el} onClick={()=>{filterData(el)}}>{el}</p>
                            ))}</div>}
                            
                         </section>

                     </div>
                </div>
                <div>
                    {/* showing products */}
                            <div className="products">

                            {filteredData.map((el)=>{
                                     

                               return <section className="ProductCard" key={nanoid()}>
                                    <div className="productImage" >
                                    <img src={el.imageurl} alt="" />
                                    </div>
                                <div className="ProductDetail">
                                    <h3 style={{fontSize:"16px" }}>{el.Name}</h3>
                                    <div className="flex">
                                        <img style={{width:"30px",}} src="https://media.istockphoto.com/vectors/shopping-cart-circle-icon-with-long-shadow-flat-design-style-vector-id871717684?k=20&m=871717684&s=612x612&w=0&h=YA_ENcr2e_FmHNRhnlrdgMJ96yWzcOJwv0zdhGCt8s4=" alt="" />
                                        <p style={{fontSize:"12px", margin:"10px 0px 10px 0px" }}> {` Sold by ${el.Brand} ` }</p>
                                    
                                    </div>
                                    <div className= "flex  lineheight cashbackProduct">
                                        <p className="crossedprice">${el.price}</p>
                                        <p style={{fontWeight:700, fontSize:"15px"}}>${el.price}</p>
                                    </div>
                                    <div className=" flex cashbackProduct">
                                        <p style={{fontSize:"12px" }}>${Math.ceil((el.price/3)/100)}</p>
                                        <img src="" alt="" />
                                        <p style={{fontSize:"12px" }}>Cashback</p>
                                    </div>
                                    <p style={{fontSize:"12px",lineHeight:"14.4px",color:"#00A8CA"}}>Free shipping</p>
                                        <div className="Productdivfoot lineheight flex">
                                            <button className="seeDetailbtn" onClick={()=>{ProductDetailPage(el._id)}}>See Details</button>
                                            <button className="addtocartbtn" onClick={()=>AddtoCart(el)}>Add to cart</button>
                                        </div>
                                </div>
                                    
                                </section>
                            })}
                             <div className="pagination_Section">
                                <button onClick={()=>{PageChangeFunction(-1)}}><h2>Prev</h2></button>
                                <button onClick={()=>{PageChangeFunction(1)}}><h2>Next</h2></button>
                            </div>
                        </div>
                       
                </div>
                
            </section>
           
             
    </div>
    

}