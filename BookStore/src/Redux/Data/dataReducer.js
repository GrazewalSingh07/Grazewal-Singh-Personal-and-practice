import * as types from "./actionTypes"
const initState={
    isloading:false,
    isError:false,
    data:null,

    onedata:null,
    onedatafailed:false,

    isAdding:false,
    couldnotAdd:false,
}
export const dataReducer=(state=initState,{type,payload})=>{
        switch (type){
            case types.GET_DATA_REQUEST:{
                return{
                    ...state,
                    isloading:true,

                }
            }
            case types.GET_DATA_SUCCESS:{
                return {
                    ...state,
                    isloading:false,
                    data:payload
                }
            }
            case types.GET_DATA_FAILURE:{
                return {
                    ...state,
                    isloading:false,
                    isError:true,
                }
            }
            case types.POST_DATA_REQUEST:{
                return {
                    ...state,
                    isAdding:true
                }
            } case types.POST_DATA_SUCCESS:{
                return {
                    ...state,
                    couldnotAdd:false
                }
            }
            case types.POST_DATA_FAILURE:{
                return {
                    ...state,
                    couldnotAdd:true
                }
            }
            case types.GET_ONE_DATA:{
                return{
                    ...state,
                    onedata:payload
                }
            }
            case types.GET_ONE_DATA_FAILURE:{
                return {
                    ...state,
                    onedatafailed:true
                }
            }
            default:{
                return state
            }
        }
}