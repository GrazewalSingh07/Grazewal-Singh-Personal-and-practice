import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import AppthemeProvider from './Context/themeContext'
import './index.css'
// console.log(AppthemeProvider)
ReactDOM.createRoot(document.getElementById('root')).render(

    <AppthemeProvider>
       <App />
    </AppthemeProvider>
   
)
