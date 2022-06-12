
const initState = {
    // todos: [],
    todos:localStorage.getItem("todos")?JSON.parse(localStorage.getItem("todos")):[],
    loading: false,
    error: null,
    toggle:false,
    // completed:[]
    completed:localStorage.getItem("completed")?JSON.parse(localStorage.getItem("completed")):[],
};
import { todosActions } from "./actionTypes";

export const todoReducer=(state=initState,action)=>{

    switch(action.type){
        case todosActions.GET_TODO_REQUEST:
            return {
                ...state,
                loading:true,
                error:null,
            };
        case todosActions.GET_TODO_SUCCESS:
            const value=action.payload
            localStorage.setItem("todos",JSON.stringify(action.payload))
            return {
                ...state,
                loading:false,
                todos:value,
            };
        case todosActions.GET_TODO_FAILURE:
            return {
                ...state,
                loading:false,
                error:action.payload,
            };
        case todosActions.ADD_TODO_REQUEST:
            return {
                ...state,
                loading:true,
                error:null,
            };
        case todosActions.ADD_TODO_SUCCESS:
            return {
                ...state,
                loading:false,
                // todos:state.todos.concat(action.payload),
            };
        case todosActions.ADD_TODO_FAILURE:
            return {
                ...state,

                loading:false,
                error:action.payload,
            };
        case todosActions.GET_COMPLETED_REQUEST:{
            return {
                ...state,
                loading:true,
                error:null,
            };
        }
        case  todosActions.GET_COMPLETED_SUCCESS:{
            const value=action.payload
            localStorage.setItem("completed",JSON.stringify(action.payload))
            return {
                ...state,
                loading:false,
                completed:value,
            };
        }
        case todosActions.GET_COMPLETED_FAILURE:{
            return {
                ...state,
                loading:false,
                error:action.payload,
            };
        }
        case todosActions.PATCH_TODO_TOGGLE:{
            return {
                ...state,
                toggle:!state.toggle,
            }
        }
        default:
            return state;
    }
}

