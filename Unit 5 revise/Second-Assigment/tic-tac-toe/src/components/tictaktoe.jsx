import React from "react"

import "./ticktaktoe.css"
export const TicTackToe=()=>{
    const [turn,setturn]=React.useState("x")
    const [cell,setcells]=React.useState(Array(9).fill(""))
    const [winner,setWinner]=React.useState()

    const Cell=({num})=>{
        return<td onClick={()=>handleClick({num})}>{cell[num]}</td>
    }
    const CheckForWinner=(squares)=>{
        let combos={
            across:[
                [0,1,2],
                [3,4,5],
                [6,7,8]
            ],
            down:[
                [0,3,6],
                [1,4,7],
                [2,5,8]
            ],
            diagonal:[
                [0,4,8],
                [2,4,6]
            ],
        }
        for(let combo in combos){
            combos[combo].forEach((pattern)=>{
                console.log(pattern)
                if(squares[pattern[0]]===""||squares[pattern[1]]===""||squares[pattern[2]]=="")
                {
                    // continue
                }
                else if(squares[pattern[0]]==squares[pattern[1]]&&squares[pattern[1]]===squares[pattern[2]]){
                    setWinner(squares[pattern[0]])
                }
            })
        }
    }
    function handleClick({num}){
        // alert(num)4
        if(cell[num]!==""){
            alert("already clicked")
            return
        }
        let squares=[...cell]
        if(turn==="x"){
            squares[num]="x"
            setturn("o")
        }
        else{
            squares[num]="o"
            setturn("x")
        }
        CheckForWinner(squares)
        setcells(squares)
    }
    function handleRestart(){
        setWinner(null)
        setcells(Array(9).fill(""))

    }
    return (
        <div className="container">
            Turn:{turn}
           <table>
               
               <tbody>
                   <tr className="tr1">
                        <Cell num={0}/>
                        <Cell num={1}/>
                        <Cell num={2}/>
                   </tr>
                   <tr className="tr2">
                        <Cell num={3}/>
                        <Cell num={4}/>
                        <Cell num={5}/>
                   </tr>
                   <tr className="tr3">
                        <Cell num={6}/>
                        <Cell num={7}/>
                        <Cell num={8}/>
                   </tr>
                    
               </tbody>
           </table>
           {winner&&(
               <>
               <p>{winner} is the winner!</p>
               <button  onClick={()=>handleRestart()}>Play Again</button>
               </>
           )}
        </div>
    )

}