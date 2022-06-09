import * as types from "./actionTypes"
const initState={
    count:0
}

  const reducer=(state=initState,{type,payload})=>{
    
    switch(type){
        case types.INCREAMENT_COUNT:{
            return {
                
                count:state.count+1,
                payload
            }
        }
        case types.DECREMENT_COUNT:{
            return {
                count:state.count-1,
                payload
            }
        }
        default:{
            return state
        }
    }
}
export {reducer}