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
declare const person1: Admin;
declare const person2: User;
declare function getType(obj: Admin | User): string;
