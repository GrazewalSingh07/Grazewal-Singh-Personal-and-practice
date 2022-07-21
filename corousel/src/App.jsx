import { useState } from 'react'
 
import './App.css'
import { Corousel } from './Corousel'
  

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <Corousel/>
    </div>
  )
}

export default App
