// import logo from './logo.svg';
import './App.css';

function App() {
  
    const food="Pizza";
    const age=20;
    const skills=["mern","nodejs", "dsa","design","animation"]
    return (
    <div className="App">
     My fav food is {food}
     <p>
       You are {age>18 ? "Eligible":"Not Eligible"} for license
     </p>
     <div>
       Your skills:
       <ul>
        {skills.map((e)=>{
          return <Skill skill={e}/>
         })}
        </ul>
     </div>
      </div>
      );
  
}
function Skill(props){
  return <h3 className='redtext'>Skill:{props.skill}</h3>
}

export default App;
