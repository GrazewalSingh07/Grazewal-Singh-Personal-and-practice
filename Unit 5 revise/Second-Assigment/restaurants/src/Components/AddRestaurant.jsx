import axios from "axios"
import { useState } from "react"
import { nanoid } from "nanoid"

export const AddRestaurant=({callback})=>{
    const [tempState,setTempState]=useState(false)
 const [tempdata,setTempdata]=useState({
     id:nanoid(),
     name:"",
     cost:"",
     votes:"",
     review:"",
     payment_method:"",
     image:"",
     categories:""

 })
 const handleChange=(e)=>{
     const {id,value}=e.target
     setTempdata({...tempdata,[id]:value})
     setTempState(true)
     
    // if(id=="payment_method"||id=="categories"){
    //     value=value.split(",")
    // }
    //  if(e.target.id=="payment_method"||e.target.id=="categories" ){
    //      e.target.value=e.target.value.split(",")
    //      console.log(e.target.value)
        //  setTempdata({...tempdata,[e.target.id]:e.target.value}) 
    //  }
    //  else{
    //     setTempdata({...tempdata,[e.target.id]:e.target.value}) 
    //  }
    // //  console.log(e.target.value)
    // setTempdata({ ...tempdata,[e.target.id]:e.target.value}) 
     console.log(tempdata)
 }
 const handlesubmit=(e)=>{
     e.preventDefault()
     if(tempState==true){
        tempdata.categories=tempdata.categories.split(",")
        tempdata.payment_method=tempdata.payment_method.split(",")
     }
     
    //  async function postdata(){
    //      await fetch("http://localhost:8080/Restaurants",{
    //          method:"POST",
    //          headers:{
    //              "Content-Type":"application/json"
    //          },
    //          body:JSON.stringify(tempdata)

    //      })
         
    //  }
    //  postdata()
    // console.log(tempdata)
    console.log(tempdata.categories,tempdata.payment_method);
    axios.post("http://localhost:8080/Restaurants",tempdata).then(()=>{
        alert("Restaurant Added to list")
    }).catch((err)=>{  alert("Something wrong")}).finally(()=>{callback(1)
        setTempdata({
        id:nanoid(),
        name:"",
         cost:"",
         votes:"",
         review:"",
         payment_method:"",
         image:"",
         categories:""
        })})
    // console.log(callback)
    
    
 }
    return (
        <div key= "AddResKey" className="AddRestaurant">
            <h1>List your Restaurant</h1>
            <form onSubmit={handlesubmit}>
                <input id="name" onChange={handleChange}  type="text" placeholder="Name" />
                <input id="cost" onChange={handleChange} type="text" placeholder="Starting from " />
                <input id="vote" onChange={handleChange}type="text"placeholder="Votes" />
                <input id="review"onChange={handleChange} type="text" placeholder="Review" />
                <input id="payment_method" onChange={handleChange}type="text" placeholder="Payment Methods seperated by commas" />
                <input id="image" onChange={handleChange}type=" text" placeholder="Image Url" />
                <input id="categories" onChange={handleChange}type="text" placeholder="Categories seperated by commas" />
                <input type="submit" value="Submit"/>
            </form>
            
        </div>
    )
}