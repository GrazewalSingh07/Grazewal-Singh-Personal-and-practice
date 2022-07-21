

export const Links=()=>{
    const linksdata=["services", "projects", "about"]
    return <div style={{display:"flex"}}>
            {linksdata.map((el,index)=>{
                return <div >
                    <a  style={{padding:"20px"}} href="#">{el}</a>
                </div>
            })}
    </div>
}