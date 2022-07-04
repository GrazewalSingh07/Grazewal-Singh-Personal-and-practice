import * as types from "./actionTypes"

const initialState = {
  data: {
    isAuth: false,
    token: JSON.parse(localStorage.getItem("token"))||"",
  },
  isLoading: false,
  isError: false,
};

export const authreducer = (state = initialState,{type,payload}) => {
  switch(type){
    case types.LOGIN_REQUEST:{
      return {
        ...state,
        isLoading:true,

      }

    }
    case types.LOGIN_SUCCESS:{
      return{
        ...state,
        isLoading:false,
        data:{
          isAuth:true,
          token:payload
        }
      }
    }
    case types.LOGIN_FAILURE:{
      return{
        ...state,
        isLoading:false,
        isError:true
      }
    }
    default:{
      return state
    }
  }
  
};
