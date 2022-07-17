 
import './App.css'
import { AllBoxes } from './components/Allboxes'
import { Navbar } from './components/navbar'
import { Search } from './components/Search'

function App() {
 
  return (
    <div className="App">
       <Navbar/>
       <Search/>
       <AllBoxes/>
    </div>
  )
}

export default App
