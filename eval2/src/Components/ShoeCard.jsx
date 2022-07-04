import React from "react";
import "./shoe.css"
import {Link} from "react-router-dom"
const ShoeCard = ({id,name,image,category}) => {
 
  let shoeId = null;
  return (
    <div data-cy={`shoe-card-wrapper-${shoeId}`}  style={{border:".5px solid", borderRadius:"1rem"}}>
      <div className="imgshoe">
        <img data-cy="shoe-card-image" src={image} alt="" style={{width:"90%",height:"300px", margin:"1rem"}}/>
      </div>
      <div className="shoedetail" style={{display:"flex", margin:"1rem"}}>
        <div style={{margin:".5rem"}} data-cy="shoe-name">name :{name}</div>
        <div style={{margin:".5rem"}} data-cy="shoe-category">category:{category}</div>
        <Link to={`/shoes/${id}`}> <button>Open</button></Link>
      </div>
    
    </div>
  );
};

export default ShoeCard;
