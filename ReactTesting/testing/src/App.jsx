import logo from './logo.svg';
import './App.css';
import { Button } from './components/Button';
import { useState } from 'react';

function App() {
  const [theme,settheme]=useState("light")
  return (
    <div className="App">
      <h1>Click Me</h1>
      <h3 >Current Theme is {theme}</h3>
      <Button onclick={()=>{settheme(theme==="light"?"dark":"light")}} variant={"ghost"}colorScheme={"green"} >Change Theme</Button>
    </div>
  );
}

export default App;
