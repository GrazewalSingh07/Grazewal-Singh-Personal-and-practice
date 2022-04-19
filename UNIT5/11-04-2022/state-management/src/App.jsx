 
 
import './App.css';
import { Todo } from './components/Todo';

function App() {
 
 
  return (
    <div className="App">
     <Todo/>
    </div>
  );
}
 


export default App;














/* <First data={cb}/>
<Second message={message}/> */
// function First({data}){
//   const message="Hellow World"
//   return (
//     <div>
//       First Child
//       <button onClick={()=>data}>
//       send data
//       </button>
//     </div>
//   )
//   data(message)
// }
// function Second({message}){
// console.log("Got from First", message)
// return <div> Got from First {message}</div>
// }
 // const [message, setMessage]=useState("")
  // const cb=(data)=>{
  //   console.log("Got from child",data)
  //   setMessage(data)

  // }