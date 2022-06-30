import { useFetch } from "./hooks/useFetch"
import { useTimeout } from "./hooks/useTimeout"

 

function App() {
  const {loading,data,error}=useFetch("https://fakestoreapi.com/products")
 const {ready}=useTimeout(5000)
  return (
    <div className="App">
      {ready&&"Ready"}
      {!ready&&"Not ready"}
    </div>
  )
}

export default App
