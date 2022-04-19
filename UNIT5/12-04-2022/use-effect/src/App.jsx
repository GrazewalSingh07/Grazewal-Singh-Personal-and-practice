 
import './App.css'
import { Todos} from './components/Todo'
 import { Counter } from './components/Counter'
import {useState} from"react"

// function App() {
//   const [show, setShow] = useState([])
//   console.log("pre effect")
 
// // useEffect(()=>{
// //   fetch("http://localhost:4000/users/")
// //   .then((d)=>d.json())
// //   .then((data)=>{
// //     // console.log(data)
// //     setShow(data);
// //   })
// // },[]) 
// useEffect(()=>{
//   async function getData(){
//     const data= await fetch("http://localhost:4000/users/")
//     const res= await data.json()
//     setShow(res)
//   }
//   getData()
// },[])
// //empty array makes useEffect which is an hook run only once in it's entire life
// console.log("after effect")
//   return (
//     <div>
//       {show.map((el)=>(
//         <div>{el.name}</div>
//       ))}
//     </div>
//     // <div className="App">{show?<Hellow/>:null}
//     //   <button onClick={()=>setShow(!show)}>Toggle components</button>
//     // </div>
//   )
// }
// function App() {
//   const [counter, setCount] = useState(0)
//  const [age, setAge]=useState(12)

//   // it is syncronous
//   // function useEffect(callbak,[]){}
// useEffect(()=>{
//    console.log("effect 1")
// },[counter]);


// useEffect(()=>{
//   console.log("effect 1")
//   // not giving any dependency inside array will make it run only one in its entire life
// },[]);
// // not giving the array will make it run infinetly
// useEffect(()=>{
//    //by adding age inside the array i can be any number of use states variable
//    //we van pas any number of element in the array 
//    // this use =effect will only be called if the age is changed
//    //else it will be exectued with every render or we can say mounted
//    console.log("effect 2")
// },[age]);
// //everyHook has to be inside the root of te function
// // it's a function itself it can't be inside any function or any cndition
// //useEffect is called at least once 
// //empty array makes useEffect which is an hook run only once in it's entire life
 
//   return (
//     <div className="App">
//        <h3>Counter:{counter}</h3>
//        <h3>Age:{age}</h3>
//        <button onClick={()=>{
//          setCount(counter+1)
//        }}>Add 1</button>
//        <button onClick={()=>{
//          setAge(age+1)
//        }}>Add 2</button>
//     </div>
//     // <div className="App">{show?<Hellow/>:null}
//     //   <button onClick={()=>setShow(!show)}>Toggle components</button>
//     // </div>
//   )
// }

function App() {
  const [show,setShow]=useState(true)
  return (
    <div className='App'>
      {show? <Todos/>:null}
      {show? <Counter/>:null} 
    <button onClick={()=>{setShow(!show)}}>
       Toggle
    </button>
 
    </div>
  )
}
export default App
