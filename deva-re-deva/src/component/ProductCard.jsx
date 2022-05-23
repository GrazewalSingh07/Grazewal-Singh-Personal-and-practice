

export const ProductCard=({id,title,price,category,description,image,rating})=>{
    return <div >
        <h1>Product Card</h1>
        <div >
            <img style={{width:"100px"}} src={image} alt={title} />
            <p>{price}</p>
            <p>{category}</p>
            <p>{description}</p>
            <div>
                <p>{rating.count}</p>
                <p>{rating.rate}</p>
            </div>
        </div>
    </div>
}