import { Button } from "./Components/Button"
import { Links } from "./Components/Links"
import { Logo } from "./Components/Logo"

 import "./App.css"
function App() {
  

  return (
    <div className="App">
       <Logo width="50px"/>
       <Links/>
       <Button>Sign in</Button>
    </div>
  )
}

export default App
