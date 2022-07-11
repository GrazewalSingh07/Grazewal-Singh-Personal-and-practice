import React, { useEffect, useState } from "react";
import {useDispatch} from 'react-redux'
import { login } from "../Redux/AuthReducer/action";
import {useNavigate} from "react-router-dom"
import {Navigate} from "react-router-dom"
import { useSelector } from "react-redux/es/exports";
// import {Redirect} from "react-router"
const Login = () => {
  const dispatch=  useDispatch()
  const navigate=useNavigate()
  const [email,setemail]=useState("eve.holt@reqres.in")
  const [password,setpassword] =useState("cityslicka")
  const token=useSelector((state)=>state.auth.data.token)
  function handlelogin(e){
      e.preventDefault()
      dispatch(login({email,password}))

  }
  // console.log(token)
  
  if(token!=""){
   return <Navigate replace to="/" /> 
  }
  
  return (
    <div>
      <h2>LOGIN</h2>
      <form onSubmit={(e)=>handlelogin(e)}>
        <div>
          <label>User Email</label>
          <br />
          <input defaultValue={email}data-cy="login-email" />
        </div>
        <div>
          <label>User Password</label>
          <br />
          <input  defaultValue={password} data-cy="login-password" />
        </div>
        <button type="submit" data-cy="login-submit" >
          Loading
        </button>
      </form>
    </div>
  );
};

export default Login;
