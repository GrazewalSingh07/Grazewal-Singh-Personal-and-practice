import logo from './logo.svg';
import './App.css';

function App() {
  
const OS=["Android","Blackberry","iPhone","Windows Phone"]
const Manufacturers=["Samsung","HTC","Micromax","Apple"]
  return (
    <div className="App">

      <div id="navbar">
       <div id="innernavbar">
         <img src={process.env.PUBLIC_URL+"/logo192.png"}/>
         <div className="flex">
           <a >Services</a>
           <a >Projects</a>
           <a >About</a>
         </div>
         <button>Contact</button>
       </div>
      </div>
       <h1 className="heading">Mobile Operation System</h1>
       <ul>
         {
           OS.map((e)=>{
            return <li>{e}</li>
           })
         }
       </ul>
       <h1 className="heading">Mobile  Manufacturers </h1>
       <ul>
         {
           Manufacturers.map((e)=>{
            return <li>{e}</li>
           })
         }
       </ul>
    </div>
  );
}

export default App;
