function getName({ firstName, lastName }) {
    if (lastName) {
        let fullname = firstName + lastName;
        return fullname;
    }
    else {
        return firstName;
    }
}
let nameobj = { firstName: "satish", lastName: "ojha" };
console.log(getName(nameobj));
let arr = [];
function phoneBook({ phones, addresses, email, firstName, lastName, middleName }) {
    arr.push({ phones, addresses, email, firstName, lastName, middleName });
}
let obj = { phones: [345, 890, 67],
    addresses: [{ houseNumber: 42, street: "mhow", city: "pithampur", state: "mp", postalCode: 345, country: "ind" }],
    firstName: "satish",
    lastName: "ojha" };
phoneBook(obj);
console.log(arr);
//# sourceMappingURL=index.js.map