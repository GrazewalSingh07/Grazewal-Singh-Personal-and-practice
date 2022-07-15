interface test{
    title:string;
    status:boolean;
    id:number;
}
interface combineName{
    firstName:string;
    lastName?:string;
}

function getName({firstName,lastName}:combineName):string{
    if(lastName){
        let fullname:string =firstName+lastName;
        return fullname;
    }
    else{
        return firstName;
    }
    
   
}
let nameobj = {firstName:"satish",lastName:"ojha"};

console.log(getName(nameobj));

interface Address{
    houseNumber:number;
    street:string;
    city:string;
    state:string;
    postalCode:number;
    country:string;

}

interface PersonDetails{
    phones:number[];
    addresses:Address[];
    email?:string;
    firstName:string;
    lastName:string;
    middleName?:string;
}
let arr:PersonDetails[]=[];
function phoneBook({phones,addresses,email,firstName,lastName,middleName}:PersonDetails){
    
    arr.push({phones,addresses,email,firstName,lastName,middleName});
}
let obj ={phones:[345,890,67],
    addresses:[{houseNumber:42,street:"mhow",city:"pithampur",state:"mp",postalCode:345,country:"ind"}],
firstName:"satish",
lastName:"ojha"};
phoneBook(obj);

console.log(arr);
