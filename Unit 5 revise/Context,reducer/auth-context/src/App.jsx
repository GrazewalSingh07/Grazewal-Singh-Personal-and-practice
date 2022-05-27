 
import './App.css'
import {Routes,Route} from "react-router-dom"
import { Login } from './Components/Login'
import { Home } from './Components/Home'
import { Navbar } from './Components/Navbar'
import { ShowToken } from './Components/ShowToken'
 
function App() {
   
  return (
    <div className="App">
      <Navbar/>
       <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path='/login' element={<Login/>}/> 
         <Route path="/showtoken" element={<ShowToken/>}/>
       </Routes>
    </div>
  )
}

export default App
