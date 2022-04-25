import { useParams } from "react-router-dom";
import { useEffect, useState } from "react"
import axios from "axios"


export const SingleEmploye=()=>{

    const [Employees, setEmployees]=useState([])
    useEffect(()=>{
        
        axios.get("http://localhost:8080/employees").then(({data})=>{
            
            setEmployees(data)
        })
    },[])
    const {id}=useParams();
    const obj = Employees.find(x => x.id == id)
    console.log(obj)
    
    return ( <div>
          <img src={obj.image} alt="#" />
          <h4>{obj.Full_Name}</h4>
          <h3>{obj.Position}</h3> 
          <p>{obj.Salary}</p>
            <ul>
                <li>{obj.work.a}</li>
                <li>{obj.work.b}</li>
            </ul> 
    </div>)
    
   }