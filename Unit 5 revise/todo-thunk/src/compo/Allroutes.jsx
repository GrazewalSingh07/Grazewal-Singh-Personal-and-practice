import { Route, Routes } from "react-router-dom"
import { EditTodo } from "./todo/editTodo"
import { Todo } from "./todo/todo"
import { TodoDetailsCompo } from "./todo/Tododetails"
import { Total } from "./todo/total"
import { PrivateRoute } from "./todo/privateRoute"

export const Allroutes = () => {
    return <>
        <Routes>
            <Route path="/" element={[<Todo />,<Total/>]}></Route>
            <Route path="/todo:id" element={<PrivateRoute><TodoDetailsCompo /></PrivateRoute>}></Route>
            <Route path="/todo:id/edit" element={<EditTodo/>} ></Route>
        </Routes>
    </>
}