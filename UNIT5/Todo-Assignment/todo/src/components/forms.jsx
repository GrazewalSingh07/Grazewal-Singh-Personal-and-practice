import { useState } from "react"


function Form(){
    const [form,setForm]=useState({
        name:"",
        
    })
    return (
    <div className="form">
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Age"/>
        <input type="text" placeholder="Address" />
         <select>
             <option value="HR">Head Recruiter</option>
             <option value="Engineering">Engineering</option>
             <option value="Marketting">Marketting</option>
             <option value="Sales">Sales</option>
             <option value="Medical">Medical</option>
         </select>
         <input type="text" placeholder="Salary"/>
         <div className="flex"> <input type="checkbox" id="married" value="Married"/>
         <label htmlFor="marital-Status">Married</label><br/></div>
        
        <div className="flex">
            <input type="checkbox" id="unmarried" value="unmarried"/>
        <label htmlFor="marital-Status">Unmarried</label>
        </div>
         
    </div>
    )
}
export {Form}