import "./Employeecrd.css"

export const EmployeeCard=({name,avatar,rating,title,salary,company_name})=>{
    return (
        <div  data-testid="candidate-container" className="EmployeeCard">
            <img style={{margin:"1rem"}} src={avatar} alt={name} /> 
            <div>
                <h3>Name : {name}</h3>
                <p>$ {salary}</p>
                <h4>Job title{title}</h4>
                <p>Company name : {company_name}</p>
                <p>ratings : {rating}</p>
            </div>
           
        </div>
    )
}