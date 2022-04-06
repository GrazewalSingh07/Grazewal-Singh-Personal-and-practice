import{sum} from "./calc"
import "./index.css"
console.log(sum(4,6,9))

const h1=document.createElement("h1");
h1.innerText="Hellow Webpack"
h1.classList.add("redtext")
document.getElementById("root").appendChild(h1)