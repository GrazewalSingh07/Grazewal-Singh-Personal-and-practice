import { useReducer } from "react"



const initState={
    count:0,
    noOfClicks:0
}
const counterActions={
    increment:"increment",
    decrement:"decrement"
}
const reducer=(state,action)=>{
    switch(action.type){
        case"increment":{
            return {
                ...state,
                count:state.count+1
            }
        }
        case"decrement":{
            return{
                ...state,count:state.count-1
            }
        }
        default:
            return state;
    }
}
export const  Counter=()=>{
   const [state,dispatch]=useReducer(reducer,initState)
    return (
        <>
        <h1>{state.count}</h1>
         <div>
            <button onClick={()=>{
                  dispatch({type:counterActions.increment})          
            }}>add</button>
            <button onClick={()=>{
                  dispatch({type:counterActions.decrement})  
            }}>reduce</button>
        </div>
        </>
       
    )
}