import "./todo.css"
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
document.querySelector("#logo").src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHnsmZJ-Niz1IDI4zSkUkEqOsaxkbuWI3ajMUCXxiKJD8ra3w-tbSs34fyPEcNDh0A2Bc&usqp=CAU"

