import { CartSlide } from "./components/CartSlide";
import {Route,Routes} from "react-router-dom"
import { Cart } from "./components/Cart";
import { Products } from "./components/Products";
import { ProductDetail } from "./components/ProductDetail";
import { Navbar } from "./components/navbar";
import { Signup } from "./components/signup";
import {Signin} from "./components/signin"
import { Home } from "./HOme";

import { PrivateRoute } from "./components/PrivateRoute";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

const App = () => {
  
  
 return(
   <div className="App">
     <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/cart" element={
        < PrivateRoute>
          <Cart/>
          </PrivateRoute>
       
        }></Route>
        <Route path="/products/:name" element={<Products/>}></Route>
        <Route path="/product/:name/:id" element={<ProductDetail/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/signin"  element={<Signin/>}></Route>
     </Routes>
   </div>
 
 ) 
};

export default App;