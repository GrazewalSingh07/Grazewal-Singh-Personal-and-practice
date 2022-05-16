import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

// function Button(props){
//   return <button onClick={()=>props?.handleClick()}>{props.title}</button>
// }
// const Myapp= React.createElement("div",{},[
//   Button({title:"Hellow",handleClick:()=>{alert("hi, this is first button")}}),
//   Button({title:"Hi", handleClick:()=>{alert("Hi, this i button 2")}})
//   ])
root.render(
  <App/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
