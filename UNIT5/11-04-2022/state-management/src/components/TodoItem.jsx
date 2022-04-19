export const TodoItem=({todo,handleChange})=>{
 return <div>
     {/* <div>Id : {todo.Id}</div> */}
     {todo.title} : {todo.status?"Done":"Not Done"}
     <button onClick={()=>handleChange(todo.Id)}>Toggle</button>
 </div>
}