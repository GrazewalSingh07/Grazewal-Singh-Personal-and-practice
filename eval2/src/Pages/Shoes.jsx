import React, { useEffect } from "react";
import Filter from "../Components/Filter";
import { useSelector } from "react-redux/es/exports";
import { useDispatch } from "react-redux/es/exports";
import { getdata } from "../Redux/AppReducer/action";
import ShoeCard from "../Components/ShoeCard";
import "../Components/shoe.css"
import { Navigate } from "react-router";
const Shoes = () => {
  const data= useSelector((state)=>state.product.shoes)
  const dispatch= useDispatch()
  useEffect(()=>{
    dispatch(getdata())
  },[])
//  console.log(data)
const token=useSelector((state)=>state.auth.data.token)

// console.log(token)
if(token==""){
 return <Navigate to="/login"/>
}
  return (
    <div>
      <Filter />
      <div className="allshoe">
        {data?.map((el)=>(
          <ShoeCard key={el.id} {...el} />
          // console.log("hi")
          // <img src={el.image} alt="" />
        ))}
      </div>
    </div>
  );
};

export default Shoes;
