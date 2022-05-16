import { useState } from "react"
import { AddContact } from "./AddContact"
import { ContactCard } from "./ContactCard"
export const ContactList=()=>{
     const [contactList,setContactList]=useState(initState)
     const handleClick=()=>{
         setContactList([...contactList,{
             id:ContactList[ContactList.length-1].id+1,
            first_name:name,
            last_name:"",
            phone:phone}])
     }
      
    return(
        <div>
            <h1>Contact List</h1>
              <AddContact/>
             <ContactCard/>
        </div>
    )
}