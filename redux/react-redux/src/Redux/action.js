//{type:"",payload:""}

//action types- It is made for reusability
//for every action type there is an action creator
export const ADD_COUNT="ADD_COUNT"

export const ADD_TODO="ADD_TODO"

export const addCount=(data)=>{
  return {
      type:ADD_COUNT,
      payload:data,
  }
}
export const addtodo=(data)=>{
  return {
    type:ADD_TODO,
    payload:data
  }
}