
import { useState } from 'react';
import './App.css';

function App() {
  const[ change,setChange]=useState({
    "Score":76,
    "Wicket":2,
    "Over":8.2
  })
 function handleChange(name,num){
   if(change["Score"]===100||change["Wicket"]>12){
     
      return
  }
     
   
   if(name==="Score"){
     
      if(num===1){
        setChange({
          ...change,
          [name]:change[name]+1})
      }
      if(num===4){
        setChange({
          ...change,
          [name]:change[name]+4})
      }
      if(num===6){
        setChange({
          ...change,
          [name]:change[name]+6})
      }
   }
   if(name==="Wicket"){
    setChange({
      ...change,
      [name]:change[name]+1})
  }
  if(name==="Over"){
   let Over=change[name]+.1
   Over=(Over).toFixed(1)
    
    setChange({
      ...change,
      [name]:+Over})
  }
 }

 function CheckScore(){
  let val=change["Score"]
  let valWic=change["Wicket"]
 if(val>=100){
   return <h1>India Won</h1>

 }
 if(valWic>12){
  return <h1>India Lost</h1>
 }
}
  return (
    <div className="App">
      <h1>India:</h1>
      <div className="banner">
        <div>
          <p> Score:</p>
        
          <h1 className="scoreCount">
            {
              change["Score"]
              // show "score" here
            }
             
          </h1>
        </div>
        <div>
        <p> Wicket:</p>
          <h1 className="wicketCount">
            {
              change["Wicket"]
              // show wicket here
            }
          </h1>
        </div>

        <div>
        <p>Over:</p>
          <h1 className="overCount">
            {
              change["Over"]
              // Show Over here in the format: "over.ball" eg: 4.5 means 4th over and 5th ball
              // if 1 more ball is thrown then over is now 5.0
              // you have to write logic to form this string from current ball number.
            }
          </h1>
        </div>
      </div>

      <div className="addScore">
        
        Add Score
        {/* these buttons should add the respective amount in the score */}
        <button className="addScore1"onClick={()=>handleChange("Score",1)}>Add 1</button>
        <button className="addScore4" onClick={()=>handleChange("Score",4)} >Add 4</button>
        <button className="addScore6" onClick={()=>handleChange("Score",6)}>Add 6</button>
      </div>

      <div className="addWicket">
        Add Wicket
        {/* Increase the count of wicket */}
        <button onClick={()=>handleChange("Wicket")}>Add 1 wicket</button>
      </div>

      <div className="addBall">
        Add ball
        {/* Increase the total number of balls thrown here. */}
        <button onClick={()=>handleChange("Over")}>Add 1</button>
      </div>

      {CheckScore()}
     
  </div>
  
  );
 
}


export default App;
