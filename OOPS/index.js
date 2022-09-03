

class Human{
     
    constructor(name,age){
       
        this.name=name,
        this.age=age
         
    }
     
    checkBalance(){
        let balance=1000
        return balance
    }
    eats(){
        console.log(`${this.name} eats`)
    }

}


function x(){
    console.log("x")
}
 

const grazy=new Human("Grazewal",21)
 
// console.log(grazy.checkBalance())
// grazy.balance="blah"
// console.log(grazy.checkBalance())
 
// class Grazewal extends Human{
//     constructor(name,age){
//         super(name,age)
//         this.skill="Full Stack Web Developer"
//     }
//     coder(){
//         console.log()
//     }
//     eats(){
//         super.eats()
//         console.log("Grazy eats Pizza")
//     }
// }


// const grazi=new Grazewal("Bittu",21)
// grazi.eats()