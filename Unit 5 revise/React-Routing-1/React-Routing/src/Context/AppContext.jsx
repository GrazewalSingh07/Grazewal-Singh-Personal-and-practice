import React, { useReducer ,useEffect} from "react"
import axios from "axios"
export const AppContext=React.createContext()
 
const Actions={
    "fetch":"fetch",
    "success":"success",
    "failure":"failure",
    "addtocart":"addtocart"
}

const initState={
    cart:[],
    products:[],
    loading:true,
    error:false
}
const reducer=(state,action)=>{
    
    switch(action.type){
         case Actions.fetch:{
             return({
                 ...state,
                 loading:true,
                products:null
             })
         }
         case Actions.success:{
            
             return({
                 ...state,
                 loading:false,
                 error:false,
                 products:action.payload
             })
         }
         case Actions.failure:{
           return ({ ...state,
            loading:false,
            error:true,})
         }
         case Actions.addtocart:{
             return({
                 ...state,
                cart:[...initState.cart,action.payload]
             })
         }
         default:
            return state
    }

}
export const AppContextProvider=({children})=>{
  
    const [{cart,products,error,loading}, dispatch]=useReducer(reducer,initState)
    // useEffect(()=>{
    //     dispatch({
    //         type:"fetch"
    //     })
    //     axios({
    //         url:"http://localhost:8080/products",
    //         method:"GET",
             
    //     }).then((res)=>{
    //         console.log(res.data)
    //         dispatch({
    //             type:"success",
    //             payload:res.data
    //         })
    //     }).catch((err)=>{
    //         dispatch({
    //             type:"error"
    //         })
    //     })
    // },[])
    
    return<div>
        
        <AppContext.Provider value={[cart,products,error,loading,dispatch]}>{children}</AppContext.Provider>
    </div>
    
}
