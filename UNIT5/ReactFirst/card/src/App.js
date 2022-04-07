// import logo from './logo.svg';
import './App.css';

function App() {
const OS=["Android","Blackberry","iPhone","Windows Phone"]
const Manufacturers=["Samsung","HTC","Micromax","Apple"]
  return (
    <div className="App">

      <div id="navbar">
       <div id="innernavbar">
         <h3>LOGOBAKERY</h3>
         <div className="flex">
           <p>Services</p>
           <p>Projects</p>
           <p>About</p>
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
