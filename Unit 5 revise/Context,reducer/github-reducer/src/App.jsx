 
import axios from 'axios'
import { useEffect, useReducer } from 'react'
import './App.css'
import { Github } from './components/Github'
const initState={
  data:[],
  error:false,
  loading:true
}
const reducer=()=>{

}
function App() {
  const [{data,error,loading}, dispatch]=useReducer(reducer,initState)

  useEffect(()=>{
    axios({
      url:"https://api.github.com/search/users",
      method:"GET",
      params:{
        q:"react",
        per_page:10,
        page:1
      }
    }).then((res)=>{
      console.log(res.data.items)
    }).catch((err)=>{
      console.log(err)
    })
  },[])
   return (
    <div className="App">
      <Github/>
    </div>
  )
}

export default App
