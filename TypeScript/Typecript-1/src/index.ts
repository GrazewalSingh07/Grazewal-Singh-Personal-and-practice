let dname: string = "satish";
let age:number =21;
let isFetching:boolean = true;
let arr:number[]=[1,2,3,4];
let str:string[]=["satish","kumar","ojha"];
let tupple:[string,boolean];
tupple=["satish",true];

enum users{
    User,
    SuperUser,
    Admin, 
    SuperAdmin
}

function product(x:number,y:number):number{
    return x*y;
}
function devide(x:number,y:number):number{
    return x/y;
}

function printname(name:string):void{
    console.log(name);
}