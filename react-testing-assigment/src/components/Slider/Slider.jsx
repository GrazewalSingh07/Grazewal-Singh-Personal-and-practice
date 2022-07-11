import { Slides } from "./Slides"
import PropTypes from "prop-types"
import { Button } from "../Button/Button"
import { useState } from "react"



export const Slider=({questions})=>{
 
    const [curr,setCurr]=useState(0)
    
    const handleslides=(a)=>{
       
        console.log(a)
        if(curr===0 && a<0){   
          setCurr(0)
          return  

        }
       if(curr===questions.length-1&&a>0){
            setCurr(4)
            return  
          }
       if(a>0){
          setCurr(curr+1)
          
          return  
        }
        if(a==-1){
          setCurr(curr-1)
          
          return   
        }
    }
    
    return <div data-testid="Slider">
         <Button data-testid="prev" disabled={curr===0 ? true : false} onClick ={()=>handleslides(-1)}>Prev</Button>
            <Slides question={questions[curr]}/>
        <Button  data-testid="next" disabled={curr===questions.length-1 ? true : false} onClick ={()=>handleslides(1)}>Next</Button>
    </div>
}
 
Slider.propTypes={
    data:PropTypes.array
}