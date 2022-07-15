interface User {
    type: 'user';
    name: string;
    age: number;
    occupation: string;
}
interface Admin {
    type: 'admin';
    name: string;
    age: number;
    role: string;
}
const person1:Admin ={
    type:"admin",
    name:"satish",
    age:21,
    role:"Admin"
}
const person2:User ={
    type:"user",
    name:"satish",
    age:21,
    occupation:"student"
}
function getType(obj:Admin|User):string{
    return obj.type;
}
console.log(getType(person2));
