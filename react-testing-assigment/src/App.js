 
import { useState } from 'react';
import './App.css';
import { Button } from './components/Button/Button';
import { Slider } from './components/Slider/Slider';
import { data } from './components/Slider/Sliderdata';
import { Slides } from './components/Slider/Slides';

function App() {
  const [count,setcount]=useState(0)

  return (
    
    <div className="App" data-testid="App">
      <h2>Count is {count}</h2>
       <Button onClick ={()=>setcount((prev)=>prev+5)}>ADD</Button>
       <Button onClick ={()=>setcount((prev)=>prev-5)}>REDUCE</Button>
       <div>
       <Slider questions={data}/>
       </div>
    </div>
  );
}

export default App;
