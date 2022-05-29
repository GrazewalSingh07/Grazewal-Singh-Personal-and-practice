import { useNavigate } from "react-router-dom"

export const SingleProduct=({category,description,image,price,rating,title,id})=>{
const navigate=useNavigate()
function OpenDetail(id){
 navigate(`/SingleProductDetail/${id}`,{replace:false})
}
    return<div style={{boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",hover:"cursor-pointer", marginTop:"20px",height:"400px"}}>
            <div>
                <img style={{width:"10rem"}} src={image} alt={title} />
            </div>
            <div>
                <h3>{title}</h3>
                <p>{category}</p>
                <h4>{price}</h4>
                <p>{rating[0]}</p>
                <p>{rating[1]}</p>
            </div>
            <button onClick={()=>OpenDetail(id)}>See Detail</button>
      </div>
}