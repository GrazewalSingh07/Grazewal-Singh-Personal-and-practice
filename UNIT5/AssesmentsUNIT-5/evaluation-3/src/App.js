 
import './App.css';
import { Routes, Route  } from "react-router-dom";
import { EmployeeList } from './components/EmployeeList';
import { Login} from './components/login';
import { Home } from './components/Home';
import { Admin } from './components/Admin';
import { SingleEmploye } from './components/SingleEmploye';
import { Navbar } from './components/navbar';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
          <Route path="/Home" element={ <Home/>}></Route>
          <Route path="/EmployeeList" element={ <EmployeeList/>}></Route>
          <Route path="/admin" element={ <Admin/>}> </Route>
          <Route path="/employe/:id" element={ <SingleEmploye/>}></Route>
          <Route path="/loginin" element={ <Login/>}> </Route>
      </Routes>
    
    </div>
  );
}

export default App;
