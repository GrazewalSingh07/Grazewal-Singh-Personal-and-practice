
import { useState } from "react"
import "./products.css"
function Products(){
    const Data=[
        {title:"T-shirt",
        price:499,
        img:"https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/1700944/2022/3/2/093bc645-d461-4128-94a1-0692803944141646215571321-HRX-by-Hrithik-Roshan-Men-Yellow-Printed-Cotton-Pure-Cotton--1.jpg",
         },
         {title:"Shirt",
        price:599,
        img:"https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/2164373/2017/11/15/11510749192975-Roadster-Men-Brown--Black-Regular-Fit-Checked-Casual-Shirt-8071510749192783-1.jpg",
         },
         {title:"Saree",
        price:699,
        img:"http://cdn.shopify.com/s/files/1/0049/3649/9315/collections/sarees_banner.jpg?v=1641298523",
         },
         {title:"Shoes",
        price:399,
        img:"https://cdn.vox-cdn.com/thumbor/pjcUw1kyqVQA8sbGFd1mz2g9pog=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/22406771/Exbfpl2WgAAQkl8_resized.jpeg",
         }
    ]

    const [products,Prodcount]=useState({
       "T-shirt":0*499,
       "Shirt":0*599,
       "Saree":0*699,
       "Shoes":0*399
    })
    let cart=[]
    function handleChange(name,price,img){
        
        cart.push({img,name,price})
        
         Prodcount({
             ...products,
             [name]:products[name]+price
         })
    }
    
    const Items=Object.values(products)
    let total=Items.reduce((cv,ac)=>{
        return ac+cv
    })
    return (
        <div className="Products">
            {Data.map((el)=>(
                <Cards title={el.title} price={el.price} img={el.img}/>
            )   
            )}
           <span><h3>Cart {total}</h3></span>
        </div>
    )

    function Cards({title,price,img}){
        return(
            <div className="ProdCard">
               
                <img className="image"src={img} alt="" />
                <div className="innerProdDiv">
                   <h3 className="title">{title}</h3>
                   <p className="price">{price}</p>
                </div>
               <div className="buttonandamount">
               <button className="addtocart"onClick={()=>handleChange(title,price,img)}>+1</button>
                <span>{products[title]}</span>
               </div>
                
            </div>
        )
       }
}




export{Products}