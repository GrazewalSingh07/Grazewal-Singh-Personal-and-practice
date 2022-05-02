import { LOGIN_USER,AUTH } from "./action"


export const Reducer=(store,{type,payload})=>{
    switch(type){
        case LOGIN_USER:
            return{...store,user:[payload]}
        case AUTH:
            return{...store,auth:payload}
        default:
            return store
    }
}
 