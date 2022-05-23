import { useEffect, useState } from "react"

export const Form=()=>{
    // const [formData,setFormData]=useState([])
const [text,setText]=useState("")

const [data,setData]=useState([])
    // const [text,setText]=useState({

    // })
    function handleText(e){
          setText(e.target.value)
         
    }

    function submitform(){
        async function getdata(){
            try {
                let res= await fetch(`https://fakestoreapi.com/products${text}`)
                let data= await res.json()
               setData(data)
            
            } catch (error) {
                console.log(error)
            }
        }
        getdata()
        console.log(data)
    }


    return (
        <div>
            <input type="text" placeholder="enter id" value= {text} onChange={handleText}/>
            <input type="submit" onClick={submitform} />
        </div>
    )
}