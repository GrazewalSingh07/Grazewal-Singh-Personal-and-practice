
import "./categories.css"

function Categories({image,title}) 
{
    return (
        <div className="category" >
            <img src={image} alt=""/>
            <b>{title}</b>
        </div>
    )
}
export {Categories}