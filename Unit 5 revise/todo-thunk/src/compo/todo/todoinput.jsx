import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addTodos, getTodos } from "../../redux/todo/action"



export const TodoInput = () => {
    const [text, setText] = useState("")
    const dispatch = useDispatch()

    const handleAdd = () => {
        addTodos({
            title: text,
            dispatch
        }).then(() => {
            getTodos(dispatch)
        })
    }
    return <>
        <input placeholder="Enter task" onChange={(e) => setText(e.target.value)} type="text" name="" id="" />
        {/* <Input/> */}
        <button onClick={
            handleAdd
        }>Add</button>
    </>
}