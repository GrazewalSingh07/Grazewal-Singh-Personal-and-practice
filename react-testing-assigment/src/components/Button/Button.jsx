export const Button=({disabled,onClick,children})=>{
    console.log(disabled)
    return <button disabled={disabled} onClick={onClick}>{children}</button>
}