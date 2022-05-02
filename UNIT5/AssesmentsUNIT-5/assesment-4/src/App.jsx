 
import './App.css'
import { Home } from './compnents/Home'
import {Route,Routes} from "react-router-dom"
import { Navbar } from './compnents/Navbar'
import{Login} from "./compnents/Login"
import{ClientPage} from "./compnents/Client"
import {Admin} from "./compnents/Admin"
function App() {
  

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/admin" element={<Admin/>}></Route>
        <Route path="/client/:name" element={<ClientPage/>}></Route>
       <Route path="/login" element={<Login/>}></Route>
      </Routes>
     
    </div>
  )
}

export default App
