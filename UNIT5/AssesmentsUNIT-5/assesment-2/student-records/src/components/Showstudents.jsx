import {useEffect,useState}  from"react"



export const ShowStudents = () => {
    const [students, setStudents]=useState([]);
    
    useEffect(()=>{
        async function getData(){
          const data= await fetch(`http://localhost:8080/students`)
          const res= await data.json()
          console.log(res)
          setStudents(res)
           
        }
        getData() 
      },[])

function sortData(students){
    students.sort((a, b) => a.first_name.localeCompare(b.first_name));
 
}

    return (
      <div className="DataHead">
          <h1>Delhi Student Tracking System</h1>
        <div className="controls ">
          <div>
            Sort By:{" "}
            <select
              // select dropdown needs both value and onChange
              className="sortby"
            >
              <option value="first_name">First Name</option>
              <option value="gender">Gender</option>
              <option value="age">Age</option>
              <option value="tenth_score">10th Score</option>
              <option value="twelth_score">12th Score</option>
            </select>
          </div>
          <div>
            Order:
            <select
            onChange={sortData(students)}
              // select dropdown needs both value and onChange
              className="sortorder"
            >
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
          </div>
          <button onClick={()=>{sortData(students)}}className="sort">sort</button>
        </div>
        <table className="table" >
          <thead>
            <tr>
            <th>S.no</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Age</th>
              <th>10th Score</th>
              <th>12th Score</th>
              <th>Branch</th>
            </tr>
          </thead>
          <tbody className="tbody">
             { students.map((el)=>(

                  <tr className="row">
                    <td className="Id">{el.id}</td>
                    <td className="first_name">{el.first_name}</td>
                    <td className="last_name">{el.last_name}</td>
                    <td className="email">{el.email}</td>
                    <td className="gender">{el.gender}</td>
                    <td className="age">{el.age}</td>
                    <td className="tenth_score">{el.tenth_score}</td>
                    <td className="twelth_score">{el.twelth_score}</td>
                    <td className="preferred_branch">{el.preferred_branch}</td>
                </tr>
             ))}
           
             
             
          </tbody>
        </table>
      </div>
    );
  };