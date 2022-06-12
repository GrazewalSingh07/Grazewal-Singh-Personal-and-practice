import axios from "axios"

import { todosActions } from "./actionTypes";



export const getTodoRequest = () => ({
    type: todosActions.GET_TODO_REQUEST,
});

export const getTodoSuccess = (todos) => ({
    type: todosActions.GET_TODO_SUCCESS,
    payload: todos,
});

export const getTodoFailure = (error) => ({
    type: todosActions.GET_TODO_FAILURE,
    payload: error,
});

export const patchTodoToggle = () => ({
    type: todosActions.PATCH_TODO_TOGGLE,
});



export const getTodos = (dispatch) => {
    const todoRequestAction = getTodoRequest()
    dispatch(todoRequestAction)
    return axios({
        url: "/todo",
        method: "GET"
    }).then((res) => {
        // console.log(res.data)
        const todosSuccessAction = getTodoSuccess(res.data)
        dispatch(todosSuccessAction)

    }).catch((err) => {
        const todosFailureAction = getTodoFailure(err)
        dispatch(todosFailureAction)
        // console.log(err)
    })
}

// export const deleteTodoRequest = () => ({
//     type: todosActions.DELETE_TODO_REQUEST,
// });

// export const deleteTodoSuccess = (todo) => ({
//     type: todosActions.DELETE_TODO_SUCCESS,
//     payload: todo,
// });

// export const deleteTodoFailure = (error) => ({
//     type: todosActions.DELETE_TODO_FAILURE,
//     payload: error,
// });

    export const getCompletedTodosrequest = () => {
        return {
            type: todosActions.GET_COMPLETED_REQUEST,

        }
    }
    export const getCompletedTodosSuccess = (todos) => {
        return {
            type: todosActions.GET_COMPLETED_SUCCESS,
            payload: todos,
        }
    }
    export const getCompletedTodosFailure = (error) => {
        return {
            type: todosActions.GET_COMPLETED_FAILURE,
            payload: error,
        }
    }



export const getCompletedTodos = (dispatch) => {
    const completedTodoRequestAction = getCompletedTodosrequest()
    dispatch(completedTodoRequestAction)
    return axios({
        url: "/todo?status=true",
        method: "GET"
    }).then((res) => {
        // console.log(res.data)
        const completedTodoSuccessAction = getCompletedTodosSuccess(res.data)
        dispatch(completedTodoSuccessAction)

    }).catch((err) => {
        const completedTodoFailureAction = getCompletedTodosFailure(err)
        dispatch(completedTodoFailureAction)
        // console.log(err)
    })
}

export const addTodoRequest = () => ({
    type: todosActions.ADD_TODO_REQUEST,
});

export const addTodoSuccess = (todo) => ({
    type: todosActions.ADD_TODO_SUCCESS,
    payload: todo,
});

export const addTodoFailure = (error) => ({
    type: todosActions.ADD_TODO_FAILURE,
    payload: error,
});



export const addTodos = ({
    title,
    dispatch
}) => {
    const todoRequestAction = addTodoRequest()
    dispatch(todoRequestAction)
    return axios({
        url: "/todo",
        method: "POST",
        data: {
            title,
            status: false
        }
    }).then((res) => {
        // console.log(res.data)
        const todosSuccessAction = addTodoSuccess(res.data)
        dispatch(todosSuccessAction)

    }).catch((err) => {
        const todosFailureAction = addTodoFailure(err)
        dispatch(todosFailureAction)
        // console.log(err)
    })
}


export const detailsTodoRequest = () => ({
    type: todosActions.DETAILS_TODO_REQUEST,
});

export const detailsTodoSuccess = (todo) => ({
    type: todosActions.DETAILS_TODO_SUCCESS,
    payload: todo,
});

export const detailsTodoFailure = (error) => ({
    type: todosActions.DETAILS_TODO_FAILURE,
    payload: error,
});