import { useEffect } from "react"
import { TodoInput } from "./todoinput"
import { Todolist } from "./todolist"
import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { getTodoFailure, getTodoRequest, getTodos, getTodoSuccess } from "../../redux/todo/action"
import { todosActions } from "../../redux/todo/actionTypes"

export const Todo = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    getTodos(dispatch)
  }, [])
  return <>
    <div>
      <h1>Todo App</h1>
      <TodoInput />
      <br />
      <Todolist />
    </div>
  </>
}
