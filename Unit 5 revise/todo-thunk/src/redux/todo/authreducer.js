import { AuthAction } from "./authAction"




const initState={
    isLoading:false,
    isError:false,
    isLoggedIn:false,
}

export const AuthReducer = (state =initState, action) => {
    switch (action.type) {
        case AuthAction.LOGIN_REQUEST:
            return {
                ...state,
                isLoading: true,
                isError: false,
                isLoggedIn:false,
            }
        case AuthAction.LOGIN_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isError: false,
                isLoggedIn:true,
            }
        case AuthAction.LOGIN_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true,
                isLoggedIn:false,
            }
        case AuthAction.LOGOUT_REQUEST:
            return {
                ...state,
                isLoading: true,
                isError: false,
                isLoggedIn:false,
            }
        case AuthAction.LOGOUT_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isError: false,
                isLoggedIn:false,
            }
        case AuthAction.LOGOUT_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true,
                isLoggedIn:false,
            }
        default:
            return state
    }
}