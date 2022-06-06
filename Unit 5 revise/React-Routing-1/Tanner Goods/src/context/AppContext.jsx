import axios from "axios";
import React, { useEffect, useState } from "react";

export const AppContext=React.createContext()
export const AppContextProvider=({children})=>{
    const [cartdata,setCartData]=useState([])
    const [vartemp,setvartemp]=useState(true)
    function handledata(data){
     axios.get("http://localhost:8080/cart").then((res)=>{
        //  console.log(res.data)
         setCartData(res.data)
     }).catch((err)=>{
         console.log(err)
     })
    }
  
    function handlevartemp(){
        setvartemp(!vartemp)
    }
    useEffect(()=>{
        handledata()
    },[vartemp])
    useEffect(()=>{
        handledata()
    },[])
    return (
        <AppContext.Provider value={[cartdata,handledata,handlevartemp]}>{children}</AppContext.Provider>
    )
}