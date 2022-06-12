import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { store } from './redux/store'
import { Provider } from "react-redux"
import axios from 'axios'
import { BrowserRouter } from "react-router-dom"
axios.defaults.baseURL = "https://mock-todo-json-server.herokuapp.com"
// axios.defaults.



ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  // </React.StrictMode>
)
