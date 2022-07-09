//TDD
// Test driven 
// Test--> Behaviour
//Function/Application

// We can first discribe how the function iss working

//expectation
// actual Results

const sum= require("./index")
 
describe("Testing sum funtion",()=>{//test suite
    test("add 2 positive numbers", ()=>{ //test

        //toBe checks le a===b
        //strictl equal
        expect(sum(2,2)).toBe(4)
    })
    test("add 2 negative numbers", ()=>{ //test

        //toBe checks le a===b
        //strictl equal
        expect(sum(-2,-2)).toBe(4)
    })
    test("add 2 positive numbers", ()=>{ //test

        //toBe checks le a===b
        //strictl equal
        expect(3*3).toBe(9)
    })
    test("add 2 positive numbers", ()=>{ //test

        //toBe checks le a===b
        //strictl equal
        expect(2).toBe(2)
    })

})

//shallow Equal 1 level fdeep in object , array
//deepEqual=> It goes all the way down to the root node 