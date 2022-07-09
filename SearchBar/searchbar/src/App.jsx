 
import { useEffect } from 'react'
import { useState } from 'react'
import './App.css'
import { SearchBar } from './component/SearchBar'
import { countries } from './utils/counteries'
function App() {
 
  const [query,setQuery]=useState("")
  const [loading,setloading]=useState(false)
  const [suggestions,setSuggestion]=useState([])
  useEffect(()=>{
    
    if(query===""){
      setSuggestion([])
    }
    else{
      // setloading(true)
      let newlistofsuggestions = countries.filter((item)=> item.country.toLowerCase().indexOf(query)!==-1?true:false).map((item)=>item.country);
      setSuggestion(newlistofsuggestions)
    
    }
    setTimeout(()=>setloading(false),1000)

  },[query])

 
  return (
    <div className="App">
      <h1>Search Bar</h1>
      <SearchBar query={query} loading={loading} setloading={setloading} suggestions={suggestions} onChange={(val)=>setQuery(val)}/>
    </div>
  )
}

export default App
