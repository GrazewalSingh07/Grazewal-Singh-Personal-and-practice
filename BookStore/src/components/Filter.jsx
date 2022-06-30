import { useEffect ,useState} from "react"
import { useDispatch } from "react-redux/es/exports"
import { data } from "../Redux/Data/action"
export const FilterComponent=()=>{
    const dispatch=useDispatch()
    
    const [filterdata,setfilter]=useState([])
    const [sort,setsort]=useState("asc")
    useEffect(()=>{
        // console.log(filterdata,sort)
        dispatch(data(filterdata,sort))
    },[filterdata,sort])
   
    function setfilterArray(e){
         
        
        if(filterdata.length==4&&!filterdata.includes(e.target.value)){
            return
        }
         else if(filterdata.includes(e.target.value)){
            if(!e.target.checked){
                let temp= filterdata.filter((el)=>{
                  
                    if(el!=e.target.value){
                        return el
                    }
                })
                    setfilter(temp)
                }
            }
               
       else{
       
        setfilter([...filterdata,e.target.value])
       }
    }
    return <div>
                <div style={{marginRight:"3rem"}}>
            <h1>Filter by category</h1>
            <div style={{display:"flex",flexDirection:"column"}}>
                <span>
                    <input type="checkbox" value="Novel" id="Novel" onChange={(e)=>setfilterArray(e)}/>
                    <label htmlFor="Novel">Novel</label>
                </span>
                <span>
                    <input type="checkbox" value="Science_Fiction" id="Science_Fiction"onChange={(e)=>setfilterArray(e)}/>
                    <label htmlFor="Science_Fiction">Science Fiction</label>
                </span>
                <span>
                    <input type="checkbox" value="Thriller" id="Thriller"onChange={(e)=>setfilterArray(e)}/>
                    <label htmlFor="Thriller">Thriller</label>
                </span>
                <span>
                    <input type="checkbox"value="Motivational" id="Motivational"onChange={(e)=>setfilterArray(e)} />
                    <label htmlFor="Motivational">Motivational</label>
                </span>
            </div>
        </div>

        <div style={{marginRight:"3rem"}}>
        <h1>Sort by year</h1>
         <select defaultValue={sort}name="" id="" onChange={(e)=>setsort(e.target.value)}>
          
            <option value="asc">Min - Max</option>
            <option value="desc">Max - Min</option>
         </select>
    </div>
    </div>
}