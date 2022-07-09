 import "./Button.css"
export const Button=({ onclick,children, variant, colorScheme})=>{
    return <button onClick={onclick}data-testid="cButton" className={ `btn ${colorScheme||"red"} ${variant || "ghost" }`}>{children}</button>
}