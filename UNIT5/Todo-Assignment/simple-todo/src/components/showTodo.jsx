export const ShowTodo=({todo})=>{
    console.log(todo)
    return(
       <div className="todo">
           {todo.map(el=>(
               <h3>{el}</h3>
           ))}
       </div>
    )
}