 
 import { Routes, Route  } from 'react-router-dom'
 import {About} from "./components/about"
import './App.css'
import { Navbar } from './components/navbar'
import { Product } from './components/products'
import {Home}  from "./components/home"
import { ProductDetail } from './components/productDetail'
function App() {
 

  return (
    <div className="App">
      <Navbar/>
      <Routes>
          <Route path="/" element={ <Home/>}> </Route>
          <Route path="/about" element={ <About/>}> </Route>
          <Route path="/products" element={ <Product/>}> </Route>
          <Route path="/product/:id" element={ <ProductDetail/>}> </Route>
      </Routes>
    </div>
  )
}

export default App
