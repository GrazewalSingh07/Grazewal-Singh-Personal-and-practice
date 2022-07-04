import * as types from "./actionTypes"

const initialState = {
  shoes: [],
  isLoading: false,
  isError: false,
};

export const productreducer = (state = initialState,{type,payload}) => {
  switch(type){
    case types.GET_SHOES_DATA_REQUEST:{
      return {
        ...state,
        isLoading:true

      }
    }
    case types.GET_SHOES_DATA_SUCCESS:{
      return {
        ...state,
        shoes:payload,
        isLoading:false
      }
    }
    case types.GET_SHOES_DATA_FAILURE:{
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
