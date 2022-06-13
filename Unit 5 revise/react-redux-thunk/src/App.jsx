 
import './App.css'
import {Routes,Route} from "react-router-dom"
import { Navbar } from './components/Navbar'
import { Dashboard} from './pages/Dashboard'
 
import {  Register } from './pages/Register'
import { Signin } from './pages/Signin'

function App() {
 

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Dashboard/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path="/signin" element={<Signin/>}></Route>
      </Routes>
    </div>
  )
}

export default App
