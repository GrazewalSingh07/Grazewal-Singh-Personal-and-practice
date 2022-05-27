 
import './App.css'
import {Routes,Route} from "react-router-dom"
import { Navbar } from './components/Navbar'
import { Home } from './components/Home'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Users } from './components/Users'
import { User } from './components/user'
import { Login } from './components/Login'
import PrivateRoute from './Context/PrivateRoute'

function App() {
  

  return (
    <div className="App">
      <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path= "/contact" element={<Contact/>}/>
      
        <Route path="/users" element={ <PrivateRoute><Users/></PrivateRoute>}/>
        <Route path="/user/:id" element={<PrivateRoute><User/></PrivateRoute>}/>
        <Route path="/login" element={<Login/>}/>
        </Routes>
      </>
     
    </div>
  )
}

export default App
