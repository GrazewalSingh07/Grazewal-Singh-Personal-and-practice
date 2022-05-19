
import "./RestaurantDetail.css"
export const RestaurantDetails=({payment_method,votes,review,cost,categories,name,image,id,star})=>{


       return  <div>
                <div key={id} className="card">
                <div className="image_container">
                    <img className="image" src={image} alt={name} />
                </div>
                <div className="detail_container">
                    
                    <h2 style={{margin:"10px", textDecoration:"underline"}}>{name}</h2>
                    <div style={{display:"flex",margin:"10px"}}>
                        <p style={{paddingRight:"10px"}}> <b>Cost of one</b> {cost}</p>
                        <p style={{paddingRight:"10px"}}> <b>Reviews</b> {review}</p>
                        <p style={{paddingRight:"10px"}}> <b>Votes</b> {votes}</p>
                        <p style={{paddingRight:"10px"}} > <b>stars</b> {star}</p>
                    </div>
                    <div >
                    <label><b style={{textDecoration:"Underline"}}>Categories available: </b> <div style={{display:"flex",margin:"10px"}}>
                    <p style={{paddingRight:"10px"}}>{categories[0]}</p>
                        <p style={{paddingRight:"10px"}}>{categories[1]}</p>
                        <p style={{paddingRight:"10px"}}>{categories[2]}</p>
                        <p style={{paddingRight:"10px"}}>{categories[3]}</p>
                        <p style={{paddingRight:"10px"}}>{categories[4]}</p>
                    </div>
                    </label>
                        
                    </div>
                    <label> <b style={{textDecoration:"Underline"}}>Payment Methods available</b>
                    <div style={{display:"flex" }}>
                    {payment_method.map((cat)=>(
                        <p style={{margin:"10px"}}>{cat}</p>
                    ))}
                    </div>
                    </label>
                    
                 
                </div>
               
            </div>
             <div className="Orderbtn" style={{ }} >
                 <button style={{background:"Transparent", color:"white",border:"none"}}> <b>Order Online</b> </button>
             </div>
       </div>
       
}