import axios from "axios"
import { useEffect, useState } from "react"
import { CandidateCard } from "./CandidateCard.module"
 
export const Employees=()=>{

const [data,setdata]=useState([])
const [loading,setLoading]=useState(true)
const [page,setPage]=useState(1)
const [sortorder,setSortOder]=useState("ASC")
useEffect(()=>{
    async function getdata(){
        try {
           axios.get(`http://localhost:8080/candidates?_page=${page}&_limit=5&_sort=salary&_order=${sortorder}`).then((res)=>{
                console.log(res.data)
                setdata(res.data)
                setLoading(false)
            }).catch((error)=>{console.log(error)}).finally(()=>{return})
        } catch (error) {
            
        }
    }
    getdata()
},[page,sortorder])
function paginate(val){
  if(page>= 1&& val>0){
      if(page==18){
          setPage(18)
          return
      }
    setPage((prev)=>(prev+1))
  }
//   else if(page==19){
//       setPage(19)
//       return
//   }
  else if(page>1&& val<0){
      setPage(page-1)
  }
  console.log(page)
}
function handlesort(e){
e.preventDefault()
setSortOder(e.target.value)
}
    return (
        <div className="Container"> 
        <h1>Employess List</h1> 
        <button key ="-1"className="button" onClick={()=>{paginate(-1)}}>Prev</button>
        <button key ="+1"className="button" onClick={()=>{paginate(1)}}>Next</button>
        <select value={sortorder} onChange={handlesort} >
            <option value="ASC">Ascending order</option>
            <option value="DESC">Descinding order</option>
        </select>
        <div className="EmployeeList">
        {data.sort((a,b)=>{return a.salary-b.salary}).map((el)=>(
            <CandidateCard {...el} />
            ))}
            </div>
        </div>



    )
}