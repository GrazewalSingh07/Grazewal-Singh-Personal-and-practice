export const LOGIN_USER= "LOGIN_USER"
export const AUTH="AUTH"
export const loginUser=(data)=>{
    
    return{
        type:LOGIN_USER,
        payload:data
    }
}
export const auth=(data)=>{
    return{
        type:AUTH,
        payload:data
    }
}