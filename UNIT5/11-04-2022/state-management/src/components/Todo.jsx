import { useState } from "react";
import { TodoInput } from "./Todo.input";
import { TodoItem } from "./TodoItem";
import {nanoid} from "nanoid"
function Todo(){
    const [todoList, setTodosList]=useState([])
    const getData=(todo)=>{
        // console.log("Recived", todo)
        //spread operateor
        //push pop will not work
        const payLoad={
            Id:nanoid(6),
            title:todo,
            status:false,
        }
        setTodosList([...todoList,payLoad])
    }
    const handleChange=(id)=>{
      setTodosList(todoList.map((e)=>(e.Id===id? {...e,status:!e.status}:e)))
    }
    return (
        <div>
            <TodoInput getData={getData}/>
             {todoList.map((e)=>(
                <TodoItem handleChange={handleChange} todo={e}></TodoItem>
             ))}
        </div>
    )
}
export {Todo}