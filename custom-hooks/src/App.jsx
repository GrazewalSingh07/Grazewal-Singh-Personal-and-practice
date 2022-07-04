import { useState } from "react"
import { useFetch } from "./hooks/useFetch"
import { useSearch } from "./hooks/useSearch"
import { useTimeout } from "./hooks/useTimeout"

 

function App() {
  const {loading,data,error}=useFetch("https://fakestoreapi.com/products")
 const {ready}=useTimeout(5000)

 const [input,setinput]=useState("")
 const {users}=useSearch(input,"https://api.github.com/search/users")
 console.log(users)
  return (
    <div className="App">
      <input type="text" placeholder="search user" onChange={(e)=>setinput(e.target.value)}/>
      {ready&&"Ready"}
      {!ready&&"Not ready"}
    </div>
  )
}

export default App
