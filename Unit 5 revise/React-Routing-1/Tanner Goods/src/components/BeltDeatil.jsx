import { useParams } from "react-router-dom"
import { useState,useEffect ,useContext} from "react"
import { AppContext } from "../context/AppContext"
import axios from "axios"
export const BeltDetail=()=>{
    const [cartdata,handledata,handlevartemp]=useContext(AppContext)
    const params=useParams()
    const{id,cat}=useParams()
    // console.log(params)
    const [temp,settemp]=useState(null)

    useEffect(()=>{
        axios.get(`http://localhost:8080/${cat}?id=${id}`).then((res)=>{
            console.log(res.data[0])
              delete(res.data[0].id)
            settemp(res.data[0])
        })
        console.log(temp)

    },[id])

    function addtocart(){

        axios.post("http://localhost:8080/cart",temp)
        handlevartemp()
    }
    return (
        <div>
             
                <div>
                     <img src={temp?.images[0]} alt="" />
                     <button onClick={addtocart}>Add to cart</button>
                </div>
               
            
        </div>
    )
}