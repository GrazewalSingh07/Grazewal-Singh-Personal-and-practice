 
import { useEffect, useState } from "react"
import "./list.css"
export const List=()=>{
    const [todo ,settodo]=useState([{"title":"Learn React","status":false},{"title":"Learn Cypress","status":false}])
    const [text,settext]=useState("")
    const [error,seterror]=useState(false)
    const [classname,setclassname]=useState("pending")
    
    const handlesubmit=(e)=>{
      if(text){
        settext("")
        let obj={
            "title":text,
            "status":false
        }
        settodo([...todo,obj])
        seterror(false)
       
      }
      else{
        seterror(true)
      }
    }
    const handlechecked=(e)=>{
     const {id,value}=e.target
        if(e.target.checked){
            
            setclassname("success")
          todo.find((el)=>el.title===value).status=true
            
             settodo(todo)
             setclassname("success")
        }
       else if(!e.target.checked){
            setclassname("")
            let curr=todo.find((el)=>el.title===value)
            curr.status=false
            settodo(todo)
            setclassname("pending")
        }
         
    }
    const deletelist=(e)=>{
        
        let temp=todo.filter((el)=>{
                if(el.title!==e){
                        return el
                }
        })
       settodo(temp)
    }
    return <> 
        <input className="input_todo" type="text" placeholder="add todo"  value={text} onChange={(e)=>{ settext(e.target.value)}}/>
        <input className="input_submit" type="submit"  onClick={handlesubmit} />
        <ul type="none" className="list">
            {todo?.map((el,index)=>(
                <div key={index} style={{display:"flex"}}> 
                    <input type="checkbox" value={el.title} id="title" onChange={handlechecked}/>
                    <li className={classname}>{el.title}</li>
                    <button  className="delete_button"onClick={()=>deletelist(el.title)}>Delete</button>
                </div>
            ))}
        </ul>
        {error?<h2 className="error">Something went wrong</h2>:null}
    </>
}