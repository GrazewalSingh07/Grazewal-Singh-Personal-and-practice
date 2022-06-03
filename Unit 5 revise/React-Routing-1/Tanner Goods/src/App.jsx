 
import { Slider } from './components/Slider'
import './App.css'
import { Navbar } from './components/Navbar'
import { Top } from './components/Top'
import {Routes,Route} from "react-router-dom"
import { Home } from './components/Home'
import { Footer } from './components/Footer'
import { Belt } from './components/Belt'
import { Wallet } from './components/Wallet'
import { TableWear } from './components/Tablewear'
import { SingleBelt } from './components/SingleBelt'
import { BeltDetail } from './components/BeltDeatil'
function App() {
 

  return (
    <div className="App">
        <Top/>
        <Navbar/>
        <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path ="/belts" element={<Belt/>}/>
         <Route path='/wallets' element={<Wallet/>}/>
         <Route path='/tablewear' element={<TableWear/>}/>
         <Route path="/product/:cat/:id" element={<BeltDetail/>}/>
        </Routes>
        <Footer/>
    </div>
  )
}

export default App
