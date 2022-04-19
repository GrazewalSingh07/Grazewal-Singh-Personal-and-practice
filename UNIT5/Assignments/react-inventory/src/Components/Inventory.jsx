import { useState } from "react"


function Inventory(){
    const data=[
        {name:"Books", Button:"+", Button2:"-"},
        {name:"Pens", Button:"+", Button2:"-"},
        {name:"Notebooks", Button:"+", Button2:"-"}
    ]

    const [items, setItems]=useState({
        Books:0,
        Pens:0,
        Notebooks:0,
    })
    const Items= Object.values(items)
    let total=Items.reduce((cv,ac)=>{
        return ac+cv
    })
    function handleChange(n,name){
       
        if(n===1){
            setItems({
                ...items,
                [name]:items[name]+1
            })
        }
        if(n===-1){
            if(items[name]===0){
                return
            }
            setItems({
                ...items,
                [name]:items[name]-1
            })
        }
      
      
    }
return(
    <div>
        {data.map((el)=>(
            <Attach name={el.name} Button={el.Button} Button2={el.Button2}/>
    ))}
    <h3>total: {total}</h3>
    </div>
    
    
)

function Attach({name,Button,Button2}){
    
    return(
         <div >
             <p>{name}:</p>
             <button className="circlularButton" onClick={()=>handleChange(1,name)}>{ Button}</button>
             <button className="circlularButton" onClick={()=>handleChange(-1,name)}>{ Button2}</button> 
             <span> {items[name]} </span>
         </div>
    )
}

}

export{Inventory}
 