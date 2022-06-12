import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { getTodos } from "../../redux/todo/action"



export const Todolist = () => {
    const navigate = useNavigate()
    const todos = useSelector((state) => state?.todo?.todos)
    const value = useSelector((state) => state?.todo)
    const dispatch = useDispatch()

    const deleteTodo = (id) => {
        console.log(id)
        axios({
            url: `/todo/${id}`,
            method: "delete"
        }).then((res) => {
            console.log(res.data)
            getTodos(dispatch)
        }).catch((err) => {
            console.log(err)

        })
    }

    return <>
        <h2>Todo List</h2>
        {value?.loading ? <p>Loading...</p> : <></>}
        {todos.map((todo) => {
            return <div key={todo.id}>
                <div onClick={() => {
                    return navigate(`todo${todo.id}`)
                }} style={{ "borderTop": "1px solid black", "padding": ".5rem" }}  >
                    <p style={todo.status?{"textDecoration":"line-through"}:null}>{todo.id}. {todo?.title}</p>
                    {todo.status ? <p>status:done</p> : <p>status:pending</p>}
                </div>
                <div><button onClick={() => deleteTodo(todo.id)}>delete</button></div>
            </div>
        })}
    </>
}