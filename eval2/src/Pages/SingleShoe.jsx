import React, { useEffect, useState } from "react";
import {useParams} from "react-router-dom"
import axios from "axios"
 
const SingleShoe = () => {
  const {id}=useParams()
  const [temp,settemp]=useState(null)
 
  useEffect(()=>{
   
    axios.get(`http://localhost:8080/shoes/${id}`).then((res)=> settemp(res.data))
  
  },[])
 
  return (
    <div>
      <h2>Shoe name: {temp?.name}</h2>
      <div>
        <img src={temp?.image} alt="Cover Pic" />
      </div>
      <div>
        <div>Shoe-Category :{temp?.category}</div>
      </div>
    </div>
  );
};

export default SingleShoe;
