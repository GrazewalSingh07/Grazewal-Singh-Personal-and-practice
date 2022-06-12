import './App.css'
import { Countercompo } from './compo/counter'
import { Todo } from './compo/todo/todo'
import { Allroutes } from './compo/Allroutes'
import { Button } from "@chakra-ui/react"
import { Total } from './compo/todo/total'
import { Navbar } from './compo/todo/navbar'

function App() {

  return (
    <div className="App">
      <Navbar/>
      <Allroutes />
    {/* <Total/> */}
    </div>
  )
}

export default App
