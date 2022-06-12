 
import './App.css'
import { Login } from './components/login'
import { TodoInput } from './components/TodoInput'
import { TodoList } from './components/todoList'

function App() {
 

  return (
    <div className="App">
      <Login/>
      <TodoInput/>
       <TodoList/>
    </div>
  )
}

export default App
