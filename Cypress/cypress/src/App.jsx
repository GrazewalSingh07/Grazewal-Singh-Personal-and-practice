 
import { useState } from 'react';
import './App.css';

function App() {
  const [counter,setcounter]=useState(0)
  return (
    <div className="App">
       <h2>Count is {counter}</h2>
       <button className='increment_count' onClick={()=>setcounter((prev)=>prev+1)}>inc</button>
       <button className='decrement_count' onClick={()=>setcounter((prev)=>prev+-1)}>dec</button>
    </div>
  );
}

export default App;
