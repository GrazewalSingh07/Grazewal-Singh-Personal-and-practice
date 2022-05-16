import Contacts  from "../data"
import { ContactCard } from "./ContactCard"
export const AllContacts=()=>{
    return (
        <div>
            {Contacts.map(el=>(
               <ContactCard {...el}></ContactCard>
            ))}
        </div>
    )
}