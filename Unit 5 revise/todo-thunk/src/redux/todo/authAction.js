


export const AuthAction = {
    LOGIN_REQUEST: "LOGIN_REQUEST",
    LOGIN_SUCCESS: "LOGIN_SUCCESS",
    LOGIN_FAILURE: "LOGIN_FAILURE",

    LOGOUT_REQUEST: "LOGOUT_REQUEST",
    LOGOUT_SUCCESS: "LOGOUT_SUCCESS",
    LOGOUT_FAILURE: "LOGOUT_FAILURE",

}


export const loginRequest = () => {
    return {
        type: AuthAction.LOGIN_REQUEST,
  
    };
}

export const loginSuccess = () => {
    return {
        type: AuthAction.LOGIN_SUCCESS,
        
    };
}


export const loginFailure = (error) => {
    return {
        type: AuthAction.LOGIN_FAILURE,
        payload: error
    };
}



export const logoutsuccess=()=>{
    return{
        type:AuthAction.LOGOUT_SUCCESS
    }
}