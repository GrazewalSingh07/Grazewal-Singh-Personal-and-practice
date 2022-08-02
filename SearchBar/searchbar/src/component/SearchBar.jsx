 import styled from "styled-components"
 
  
 
 
import { useState } from "react"
export const SearchBar=({loading,setloading,onChange, suggestions})=>{
   const [inputText,setInputText]=useState("")
   const [active,setActive]=useState(0)
   const handleInputChange=(e)=>{
    setInputText(e.target.value)
    onChange(e.target.value)
    setloading(true)
   }

   const handleClear=()=>{
    setInputText("")
    onChange("")
    setloading(false)
   }
    return <>  
    <SearchBarWrapper  len={suggestions.length}>
        <Icon src="https://flyclipart.com/thumb2/search-icons-283914.png"/>
        <Input value={inputText} onChange={handleInputChange}/>
        <RightSide>
           {inputText && <Icon src="https://flyclipart.com/thumb2/pop-music-close-button-png-icon-free-download-645906.png" alt="close button" style={{cursor:"pointer"}} onClick={handleClear}/>} 
           {loading && <StyledSpinner viewBox="0 0 50 50">
            <circle
            className="path"
            cx="25"
            cy="25"
            r="20"
            fill="none"
            strokeWidth="4"
            />
            </StyledSpinner>} 
        </RightSide>
    </SearchBarWrapper>
   {!loading&& suggestions.length>0 && (
    <SuggestionBox len={suggestions.length} limit={5} active={active} >
        {suggestions.map((item,index)=>{
            return <div key ={index} onMouseOver={()=>{setActive(index+1)}}>{item}</div>
        })}
    </SuggestionBox>
   )}
    </>
}
const SuggestionBox=styled.div`
border:1px solid black;
display:flex;
flex-direction:column;
flex:0 0 auto;
max-height:200px;
overflow:hidden;
border-bottom-right-radius:20px;
border-bottom-left-radius:20px;
border-top-color:${({len})=>(len? "transparent":"black")};
& *{
    flex:1;
    text-align:left;
    padding:10px;
    padding:left:50px
};
& :nth-child(n+${({limit})=>limit+1}){
    display:none;
}
& :nth-child(${({active})=>active}){
    background:lightblue;
    color:black;
    font-weight:700;
    cursor:pointer;
}
`
const SearchBarWrapper=styled.div`
    border: 1px solid black;
    display:flex;
    border-radius:20px;
    border-bottom-right-radius:${({len})=>len?"0px":"20px"};
    border-bottom-left-radius:${({len})=>len?"0px":"20px"};
    padding: 5px 10px;
    align-items:center`
    
const Icon=styled.img`
    height:20px;
    padding-right:20px`
const Input=styled.input`
    border:none;
    outline:none;
    font-size:20px;
    flex:1
`
const RightSide=styled.div`

`
const StyledSpinner = styled.svg`
  animation: rotate 2s linear infinite;

  width: 20px;
  height: 20px;
  
  & .path {
    stroke: #5652BF;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }
  
  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`