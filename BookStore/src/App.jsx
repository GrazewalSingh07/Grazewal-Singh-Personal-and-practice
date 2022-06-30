 
 
import {Routes,Route} from "react-router-dom"
import { Navbar } from './components/Navbar'
import { Books } from './Pages/Books'
import { SingleBook } from './Pages/SingleBook'
import { EditBook } from './Pages/EditBook'
import { Login } from './Pages/Login'
import {PrivateRoute} from "./components/PrivateRoute"
function App() {
 

  return (
    <div className="App">
      <Navbar/>
      <Routes>

        <Route path='/' element={<PrivateRoute><Books/></PrivateRoute>}></Route>
        <Route path='/Book/:id' element={<PrivateRoute><SingleBook/></PrivateRoute>}></Route>
        <Route path='/Book/:id/edit' element={<PrivateRoute><EditBook/></PrivateRoute>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path="*" element={<h3>Page Not Found</h3>} />
      </Routes>
       
    </div>
  )
}

export default App
