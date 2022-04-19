

function App(data){
    const handlechange=(value)=>{
        console.log("hello",value)
    }
    return First(handlechange)
}

function First (handlechange){
    const data="test";
    handlechange(data)
}

 
