import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { B } from './B'
import { A } from './A'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
       <B/>
       <A/>
    </div>
  )
}

export default App
