 import {Routes,Route} from "react-router-dom"
import { SearchBar } from "./components/Search"
function App() {
  

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SearchBar/>}></Route>
      </Routes>
    </div>
  )
}

export default App
