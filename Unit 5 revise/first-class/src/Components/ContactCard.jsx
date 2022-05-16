import { useState } from "react"
export const ContactCard=()=>{
    const initState=[
        {"first_name":"Grazewal",
         "last_name":"Singh",
        "phone":9199770959},
        {
            "first_name":"Alok",
         "last_name":"Raj",
        "phone":8210974387}
        
    ]
    const [contactList, setContactList]=useState(initState)
    return(
        <div>
            {contactList.map((el)=>(
                <p>{el.first_name} { " "} {el.phone}</p>
            ))}
        </div>
    )
}