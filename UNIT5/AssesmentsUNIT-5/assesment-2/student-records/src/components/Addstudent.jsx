 
   import { useState } from "react";
export const AddStudent = () => {
    const [formData, setFormData] = useState({
        first_name:"",
        last_name:"",
        email:"",
        gender:"",
        age:0,
        teneth_score:0,
        twelth_score:0,
        preferred_branch:""
      })
const[errors,setErrors]=useState({
    age:"",
    marks:""
})
    function handleChange(e){
        const {name,value}=e.target
       
         
        setFormData({
            ...formData,
            [name]:value
        })
    }
    function handleSubmit(e){
    e.preventDefault()
    console.log(formData)
    fetch("http://localhost:8080/students",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(formData)
    })
    }
  return (
    <form className="addstudent" onSubmit={handleSubmit}>
      <div>
        <h3>Student form</h3>
        Firstname:{" "}
        <input
        onChange={handleChange}
          type="text"
          name="first_name"
          className="first_name"
          placeholder="enter first name"
          
        />
      </div>
      <div>
        {" "}
        Last Name:{" "}
        <input
        onChange={handleChange}
          type="text"
          name="last_name"
          className="last_name"
          placeholder="enter last name"
        />
      </div>
      <div>
       
        Email:{" "}
        <input
         onChange={handleChange}
          type="email"
          name="email"
          className="email"
          placeholder="enter email"
        />
      </div>

      <div>
        Gender: {/* NOTE: radio boxes only work when they have same `name`. */}
        <div>
          Male
          <input
          onChange={handleChange}
            name="gender"
            className="male"
            type="radio"
            value={"male"}
          />{" "}
          Female{" "}
          <input
          onChange={handleChange}
            name="gender"
            className="female"
            type="radio"
            value={"female"}
          />
        </div>
      </div>
      <div>
        Age{" "}
        <input
        onChange={handleChange}
          type="number"
          name="age"
          className="age"
          placeholder="enter age"
        />
     
      </div>
      <div>
        Tenth Score:{" "}
        <input
        onChange={handleChange}
          type="number"
          name="tenth_score"
          className="tenth_score"
          placeholder="enter 10th score"
        />{" "}
      </div>
      <div>
        Twelth Score:{" "}
        <input
        onChange={handleChange}
          type="number"
          name="twelth_score"
          className="twelth_score"
          placeholder="enter 12th score"
        />{" "}
      </div>
      <div>
        <select
          onChange={handleChange}
          value={""} // select dropdown needs both value and onChange attributes
          name="preferred_branch"
          className="preferred_branch"
        >
          <option value="law">law</option>
          <option value="commerce">commerce</option>
          <option value="science">science</option>
          <option value="sports">sports</option>
          <option value="arts">arts</option>
          <option value="acting">acting</option>
        </select>
      </div>

      <input className="submit" type="submit" value="Submit"  />
      {
        // <div className="error"></div>
        // show this div with proper error before submitting form, if there's anything not provided
        // eg: first name missing, age cannot be greater than 100 etc
      }
    </form>
  );
};
 