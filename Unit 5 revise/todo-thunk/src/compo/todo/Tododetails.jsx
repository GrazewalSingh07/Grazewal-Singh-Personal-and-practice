import axios from "axios"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { parsePath, useNavigate, useParams } from "react-router-dom"
import { detailsTodoFailure, detailsTodoRequest, detailsTodoSuccess } from "../../redux/todo/action"


export const TodoDetailsCompo = () => {
    const navigate=useNavigate()
    const state = useSelector((state) => state.details)
    const toggle=useSelector((state)=>state.todo.toggle)
    console.log(toggle)
    // console.log(state)
    const dispatch = useDispatch()

    const params = useParams()
    // console.log(params.id)
    const changeStatus = () => {
        dispatch(detailsTodoRequest())
        axios({
            url: `/todo/${params.id}`,
            method: "patch",
            data: {
                status: !state.todos.status
            }

        }).then((res) => {
            // console.log(res.data)
            dispatch(detailsTodoSuccess(res.data))
        }).catch((err) => {
            dispatch(detailsTodoFailure(err))
        })
    }

    useEffect(() => {
        const todoDetailsRequestAction = detailsTodoRequest()
        dispatch(todoDetailsRequestAction)
        axios({
            url: `/todo/${params.id}`,
            method: "GET",

        }).then((res) => {
            const todoDetailsSuccessAction = detailsTodoSuccess(res.data)
            dispatch(todoDetailsSuccessAction)

            // console.log(res.data)
        }).catch((err) => {
            const todoDetailsFailureAction = detailsTodoFailure(err)
            dispatch(todoDetailsFailureAction)
        })
    }, [toggle])
    return <>
        <h3>Details details</h3>
        {state.loading && <p>loading...</p>}
        {state.error && <p>error</p>}
        <p>task : {state.todos.title}</p>
        {state.todos.status ? <p>status:done</p> : <p>status:pending</p>}
        <button onClick={changeStatus} >toggle status</button>
        <button onClick={()=>navigate(`/todo${state.todos.id}/edit`)}>Edit</button>
    </>
}