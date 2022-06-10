import * as types from "./actionTypes"

export const fetchtodo=(payload)=>{
    return{
        type:types.GET_TODOS_REQUEST,
        payload

    }
}
export const fetchtodoFailure=(payload)=>{
    return{
        type:types.GET_TODOS_FAILURE,
        payload

    }
}
export const fetchtodoSucess=(payload)=>{
    return{
        type:types.GET_TODOS_SUCCESS,
        payload

    }
}
export const reload=()=>{
    return {
        type:types.RELOAD
    }
}
