import { useEffect, useState } from "react"
import axios from "axios"
import {Link} from "react-router-dom"
import EmployeList from "./EmployeList.css"
export const EmployeeList=()=>{
    const [Employees, seteEmployees]=useState([])
    useEffect(()=>{
        
        axios.get("http://localhost:8080/employees").then(({data})=>{
            
            seteEmployees(data)
        })
    },[])
    return (
        
        <div className="EmployeeList">
            {
                
            Employees.map((el)=>(
                <div key={el.id} className="onepiece" >
                    <Link to={`/employe/${el.id}`} > <img src={el.image} style={{margin:"15px", width:"200px"}} alt="#" /></Link> 
                    <h3>{el.Full_Name}</h3>
                    <h4>{el.Position}</h4>
                </div>
              
            ))
        
            }
            
        </div>
    )
}