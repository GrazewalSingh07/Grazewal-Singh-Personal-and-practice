import axios from "axios"
import { useEffect } from "react"
import { useSelector ,useDispatch} from "react-redux"
 
export const TodoList=()=>{
    const dispatch=useDispatch()
    const isError=useSelector((state)=> state.isError)
    const isLoading=useSelector((state)=>state.isLoading)
    const todo=useSelector((state)=>state.todo)
    console.log(todo)
    const reload=useSelector((state)=> state.reload)
 
    useEffect(()=>{
        dispatch({type:"GET_TODOS_REQUEST"})
       axios.get("http://localhost:8080/todos").then((res)=>{
        //  console.log(res.data)
        dispatch({type:'GET_TODOS_SUCESS',payload:res.data})
    }).catch((err)=>{
        dispatch({type:"GET_TODOS_FAILURE",payload:err.data})
    })
    },[reload])

    return <div>
       {todo?.map((el)=>(
            <div key ={el.id}>
                <h3>{el.title}</h3>
            </div>))}
    </div>
}