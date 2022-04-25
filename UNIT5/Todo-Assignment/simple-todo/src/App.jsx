 import { useState } from 'react'
import './App.css'
import {Todo} from "./components/todo"
import {ShowTodo} from "./components/showTodo"
function App() {
const [todo, setTodo]=useState([])
function cb(data){
  console.log(data)
  setTodo(data)
}
console.log(todo)
  return (
    <div >
       
        <h2>What's your schedule for today</h2>
       
      <div className="App">
      <ShowTodo todo={todo}/>
      <Todo fun={cb}/>
      </div>
      
    </div>
  )
}

export default App
