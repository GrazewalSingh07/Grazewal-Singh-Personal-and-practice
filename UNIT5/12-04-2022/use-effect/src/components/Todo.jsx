import { useEffect,useState } from "react"

export const Todos=()=>{
    const [todos, setTodos]=useState([]);
    const [text, setText]=useState("");
    const [loading,setLoading]=useState(true)
    const [page,setPage]=useState(1)
    
     
    useEffect(()=>{
        async function getData(){
          const data= await fetch(`http://localhost:4000/todos/?_page=${page}&_limit=5`)
          const res= await data.json()
          setTodos(res)
           
        }
        getData()
        setLoading(false)

        //this function is called by react, it a callback function
        return function cleanUp(){
            console.log("Unmounting Todos")
        }
        //function returning function is curried function
      },[page])
    return loading? ("Loading..."):(
    <div>
        <input onChange={e=>setText(e.target.value)} type="text" placeholder="Enter Todo"/>
        <button onClick={()=>{
            const data={
                title:text,
                status:false,
            };
            fetch("http://localhost:4000/todos",{
                method:"POST",
                headers:{
                    "content-type":"application/json"
                },
                body:JSON.stringify(data)
            });
            //axios.post("http://localhost:4000/todos",data)
        }}>Add todo</button>
        {todos.map((ele)=>(
              <h3 key={ele.id}>
                  {ele.title}
              </h3>
        )
          
        )}
        <button onClick={()=>setPage(page-1)}>Prev</button>
        <button onClick={()=>setPage(page+1)}>Next</button>
    </div>
    )
}