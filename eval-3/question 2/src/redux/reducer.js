import { actionTypes } from "./action";

const initState = {
    isLoading:false,
    isError:false,
    data:[]
};

function reducer(state = initState, action) {
   switch(action.type){
       case actionTypes.ADD_USER_REQUEST:{
           isLoading(true)
           isError(false)
       }
       case actionTypes.ADD_USER_SUCCESS:{
         isLoading(false)
           isError(false)
           data:[...state.data,action.payload]
    }
    case actionTypes.ADD_USER_FAILURE:{
        isLoading(false)
        isError(true)
    }
    default:{
        return state
    }
    
   }
  
}

export default reducer;
