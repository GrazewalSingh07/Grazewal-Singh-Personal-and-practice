
import * as types from "./actionTypes"
const initState={
    isLoading:true,
    isError:false,
    todo:[],
    reload:false

}
export const reducer=(state=initState,{type,payload})=>{
 
  console.log(payload)
    switch(type){
        case types.GET_TODOS_REQUEST:{
            return({
                ...state,
                isLoading:true,
                isError:false,

            })
        }
        case types.GET_TODOS_FAILURE:{
            return({
                ...state,
                isLoading:false,
                isError:true
            })
        }
        case types.GET_TODOS_SUCCESS:{
            return({
                    ...state,
                    isLoading:false,
                    isError:false,
                    todo:payload
            })
        }
        case types.RELOAD:{
            return ({
                reload:(!state.reload)
            })
        }
        default:{
            return state
        }
    }
}