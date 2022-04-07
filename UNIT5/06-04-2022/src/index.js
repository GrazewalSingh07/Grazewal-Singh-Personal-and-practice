import{sum} from "./calc"
import "./index.css"
console.log(sum(4,6,9))
import React from "react";
import ReactDOM from "react-dom"
 
// const h1=document.createElement("h1");
// h1.innerText="Hellow Webpack"
// h1.classList.add("redtext")
// document.getElementById("root").appendChild(h1)

// const root=

// const td=React.createElement("td",{},"Element1")
// const th=React.createElement("th",{},"Table")
// const tr=React.createElement("tr",{},th)

// const table= React.createElement("table",{},tr,tr)
// const  h1=React.createElement("h1",{},"Hello Again")
// const p=React.createElement("p",
// {className:"redtext"},h1,h1,h1, table)
// ReactDOM.render(
//     p,//what
//     // "Hellow world",
//     document.getElementById("root")//where
// )

ReactDOM.render(
     <div>
         <h1>Hellow React</h1>
         <img  src="https://cdn.evilmartians.com/front/posts/optimizing-react-virtual-dom-explained/cover-a1d5b40.png" height="500px" width="500px"/>
         
     </div>, //JSX
    document.getElementById("root")//where
)