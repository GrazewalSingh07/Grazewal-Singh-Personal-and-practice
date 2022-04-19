 
import { useState } from 'react';
import './App.css';
// import { Categories } from './Categories/Categories';
 
function App() {
  // const navbar=[
  //   {
  //     image:"https://rukminim2.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100",
  //     title:"Top Offers"
  //   },
  //     {
  //       image:"https://rukminim2.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100",
  //     title:"Grocery"
  //   },
  //     {
  //       image:"https://rukminim2.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100",
  //     title:"Mobiles"
  //   },
  //     {
  //     image:"https://rukminim2.flixcart.com/flap/128/128/image/82b3ca5fb2301045.png?q=100",
  //     title:"Fashion"
  //   },
      
  // ]
  const [counter, setCounter]=useState(0);
  
  //counter is still const but its changing, the fact is
  //it's not changing is recreates the const counter with new value
  // const handleAdd=()=>{
  //   if(counter>=10){
  //     return
  //   }
  //  setCounter(counter+1)
  // }
  // const handleSub=()=>{
  //   if(counter<=0){
  //     return
  //   }
  //  setCounter(counter-1)
    
  // }
  const handleChange=(n)=>{
    if(n===1){
      
      setCounter(counter+1)
    }
    if(n===-1){
      if(counter===0){
        return
      }
      setCounter(counter-1)
    }
    if(n===2){
     
      setCounter(counter*2)
    }
  }
  
  
  return (
   
    <div  className='App' >
     
        <h3>Counter: {counter}</h3>
        <button onClick={() => handleChange(1)}>Add one</button>
        <button onClick={() => handleChange(-1)}>Minus one</button>
        <button onClick={() => handleChange(2)}>double</button>
        <p>{Color(counter %2===0? "even":"odd")}</p>
    </div>
  );
}
 
function Color(a){
  if(a==="odd"){
    return <p className="red">Number is Odd</p>
  }
  else{
    return <p className="green">Number is Even</p>
  }
 
}
export default App;



/*<div >
{
  navbar.map((ele)=>(
    <Categories image={ele.image} title={ele.title}/>
  ))
}
</div>*/