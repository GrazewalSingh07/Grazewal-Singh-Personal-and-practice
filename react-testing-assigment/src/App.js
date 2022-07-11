 
import { useState } from 'react';
import './App.css';
import { Button } from './components/Button';

function App() {
  const [count,setcount]=useState(0)
  return (
    <div className="App" data-testid="App">
      <h2>Count is {count}</h2>
       <Button onClick ={()=>setcount((prev)=>prev+5)}>ADD</Button>
       <Button onClick ={()=>setcount((prev)=>prev-5)}>REDUCE</Button>
    </div>
  );
}

export default App;
