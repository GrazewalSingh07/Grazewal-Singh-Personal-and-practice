import { useParams } from "react-router-dom"
import { useContext } from "react"
import { AppContext } from "../Context/AppContext"
export const SingleProductDetail=()=>{
    const {id}=useParams()
    const [cart,products,error,loading,dispatch]=useContext(AppContext)
    const curr=products.filter((el)=>{
        if(el.id==id){
            return el
        }
    })
    
   function addtocart(){
       alert("done")
        dispatch({
            type:"addtocart",
            payload:curr[0]
        })
   }
    return (
        <div>
            <h1>SingleProductDetail</h1>
            <div>
                <img style={{width:"10rem"}} src={curr[0].image} alt={curr[0].title} />
            </div>
            <div>
                <h3>{curr[0].title}</h3>
                <p>{curr[0].description}</p>
                <p>{curr[0].category}</p>
                <h4>{curr[0].price}</h4>
                <p>{curr[0].rating[0]}</p>
                <p>{curr[0].rating[1]}</p>
            </div>
            <button onClick={addtocart}>Add to cart</button>
        </div>
    )
}