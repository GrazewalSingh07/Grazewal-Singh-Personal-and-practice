 
import axios from 'axios'
import { useEffect, useReducer } from 'react'

import React from "react";
const initState={
    data:null,
    error:false,
    loading:true
  }
  const GithubAction={
  "fetch":"fetch",
  "sucess":"sucess",
  "failure":"failure"
  
  }
  const reducer=(state,action)=>{
    switch(action.type){
      case GithubAction.fetch:{
        return(
          {
            ...state,
            loading:true,
            data:null
          }
        )
      }
      case GithubAction.sucess:{
        return(
          {
            ...state,
            loading:false,
            error:false,
            data:action.payload
          }
        )
      }
      case GithubAction.failure:{
        return(
          {
            ...state,
            loading:false,
            error:true,
            
          }
        )
      }
      default:
        return state
       
    }
  
  }
export const Github=()=>{
    const [{data,error,loading}, dispatch]=useReducer(reducer,initState)

  useEffect(()=>{
    dispatch({
      type:GithubAction.fetch
    })
    axios({
      url:"https://api.github.com/search/users",
      method:"GET",
      params:{
        q:"react",
        per_page:10,
        page:1
      }
    }).then((res)=>{
      console.log(res.data.items)
      dispatch({
        type:GithubAction.sucess,
        payload:res.data.items
      })
    }).catch((err)=>{
      dispatch({
        type:GithubAction.failure,
        
      })
    })
  },[])
    if(error){
        return <h1>Something bad happened</h1>
    }
    if(loading) {
     return <h1>Loading</h1>}

    return(
          <div>
            <h1>Github</h1>
            <>
            {data?.map((el)=>(
                <div key={el.node_id}> 
                <img src={el.avatar_url} alt="" />
                <p>{el.login}</p>
                </div>
            ))}
            </>
               
            
        </div>
    )
}