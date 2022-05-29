 
import './App.css'
import {Routes, Route, Router} from "react-router-dom"
import { Home } from './components/Home'
import { About } from './components/About'
import { Products } from './components/Products'
import { SingleProduct } from './components/SingleProduct'
import { Cart } from './components/Cart'
import { Navbar } from './components/Nabar'
import { SingleProductDetail } from './components/SingleProductDetail'
import { NotFound } from './components/NotFound'
function App() {
  

  return (
    <div className="App">
      <Navbar/>
       <Routes>
         <Route path="/" element={<Home/>}></Route>
         <Route path="/about" element={<About/>}></Route>
         <Route path="/products" element={<Products/>}></Route>
         <Route path="/SingleProductDetail/:id" element={<SingleProductDetail />}></Route>
         <Route path="/cart" element={<Cart/>}></Route>
         <Route path="*" element={ <NotFound/>}></Route>
       </Routes>
         
    </div>
  )
}

export default App
