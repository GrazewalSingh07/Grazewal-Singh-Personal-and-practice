import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
 
 import { CartontextProvider } from './context/cartContext'
 import { AuthContextProvider } from './context/AuthContext'
import {BrowserRouter} from "react-router-dom"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <BrowserRouter>
      <AuthContextProvider>
        <CartontextProvider>
          <App />
          </CartontextProvider>
       </AuthContextProvider>
     </BrowserRouter>
  </React.StrictMode>
)
