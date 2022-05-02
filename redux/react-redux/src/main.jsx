import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {Provider as ReduxProvider} from"react-redux"
import {store} from "./Redux/store"
ReactDOM.createRoot(document.getElementById('root')).render(
 
  <React.StrictMode>
     <ReduxProvider store={store}>
       
      <App />
     </ReduxProvider>
  </React.StrictMode>
)
