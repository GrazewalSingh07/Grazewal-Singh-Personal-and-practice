import React, { useEffect, useState } from "react";
import { getdata } from "../Redux/AppReducer/action";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
const Filter = () => {
  // DO NOT CHANGE THE ORDER of the category filters: ie. Sneakers, Loafers, Canvas, Boots
  //in the UI
  const dispatch=useDispatch()
  const [filter,setFilter]=useState([])
  function handlefilter(e){
    // console.log(e.target.value)
    if(filter.length==4&&!filter.includes(e.target.value)){
      return
  }
   else if(filter.includes(e.target.value)){
      if(!e.target.checked){
          let temp= filter.filter((el)=>{
            
              if(el!=e.target.value){
                  return el
              }
          })
              setFilter(temp)
          }
      }
         
 else{
 
  setFilter([...filter,e.target.value])
 }

  }
  useEffect(()=>{
  dispatch(getdata(filter))
  },[filter])
 
  return (
    <div>
      <h3>Filters</h3>
      <div>Category</div>
      <div data-cy="filter-category">
        <div>
          <input type="checkbox" value="Sneakers" onChange={(e)=>{handlefilter(e)}} />
          <label>Sneakers</label>
        </div>
        <div>
          <input type="checkbox" value="Loafers" onChange={(e)=>{handlefilter(e)}}/>
          <label>Loafers</label>
        </div>
        <div>
          <input type="checkbox" value="Canvas" onChange={(e)=>{handlefilter(e)}}/>
          <label>Canvas</label>
        </div>
        <div>
          <input type="checkbox" value="Boots" onChange={(e)=>{handlefilter(e)}}/>
          <label>Boots</label>
        </div>
      </div>
    </div>
  );
};

export default Filter;
