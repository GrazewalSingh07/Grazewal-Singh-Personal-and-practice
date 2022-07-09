 import PropTypes from "prop-types"
import { useRef, useState } from "react"
import { PinItem } from "./PinItem"
  const Pin=({length,SetOtpHandler})=>{

    const inputRef=useRef([])
    const [value,setvalue]=useState(new Array(length).fill(""))

    const [isdisabled,setdisabled]=useState(false)
    function BackSpaceHandler(e,index){
        value[index]=e.target.value
        setvalue(value)
       
        if(index>0&& !e.target.value){
            inputRef.current[index-1].focus()
        }
        SetOtpHandler(value.join(""))
       
    }
    const handlechange=(e,index)=>{
      value[index]=e.target.value
      setvalue(value)
      if(index==length-1){
        setdisabled(true)
             }
        if(e.target.value.length==4&&index<length-1){
            inputRef.current[index+1].focus()
        }
        SetOtpHandler(value.join("-"))
    }
    const handlePaste=(e)=>{
        //  12345
        e.preventDefault()
        
        const data=e.clipboardData.getData("text"). split("").
        filter((value,index)=>index<length);

        data.forEach((el,index)=>{
            value[index]=el
            inputRef.current[index].value=el
            if(index<length-1){
                inputRef.current[index+1].focus()
            }
        })
         
        // SetOtpHandler(value.join(""))
    }
    return <div onPaste={handlePaste} >
        { new Array(length).fill(1).map((el, index)=>{
         return   <PinItem isdisabled={isdisabled} key={index} onChange={(e)=>handlechange(e,index)} length={4} ref={(el)=>{ inputRef.current[index]=el }}
         onBackSpaceHandler={(e)=>BackSpaceHandler(e,index)}/>
        })
        }
    </div>
}
//PropTypes is a way to limit the types of props that you get in react component
Pin.propTypes={
    length:PropTypes.number.isRequired,
    onChange:PropTypes.func

}
export default Pin