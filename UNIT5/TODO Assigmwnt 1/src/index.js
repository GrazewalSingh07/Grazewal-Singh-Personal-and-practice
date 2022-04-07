import "./todo.css";
// import {logo} from "./logo"
import React from "react"
import ReactDOM from "react-dom"

document.getElementById("submitbtn").addEventListener("click",addnote)
function addnote(event){
    event.preventDefault()
    let notetitle=document.querySelector("#notetitle").value
    let note=document.querySelector("#note").value
    localStorage.setItem("note",JSON.stringify(note))
    localStorage.setItem("notetitle",JSON.stringify(notetitle))
    let Notename=document.createElement("tr");
    let Note=document.createElement("td")
    Note.textContent=JSON.parse(localStorage.getItem("note"))
    let Notetitle=document.createElement("td")
    Notetitle.textContent=JSON.parse(localStorage.getItem("notetitle"))
    Notename.append(Notetitle,Note)
    document.getElementById("table").appendChild(Notename)
    document.querySelector("#notetitle").value=""
    document.querySelector("#note").value=""
   
}
// document.querySelector("#logo").src=logo

