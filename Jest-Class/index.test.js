//TDD
// Test driven 
// Test--> Behaviour
//Function/Application

// We can first discribe how the function iss working

//expectation
// actual Results


const sum= require("./index")
afterEach(() => {
    jest.clearAllMocks();
  });
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
    test("add 1 string and 1 positive number", ()=>{ //test

        //toBe checks le a===b
        //strictl equal
        expect(sum("2",3)).toBe(5)
    })
    test("add 1 negative and 1 positive numbers", ()=>{ //test

        //toBe checks le a===b
        //strictl equal
        expect(sum(-1,2)).toBe(3)
    })
    test("add more than 2 positive numbers", ()=>{ //test

        //toBe checks le a===b
        //strictl equal
        expect(sum(2,5,7,10)).toBe(24)
    })

})

//shallow Equal 1 level fdeep in object , array
//deepEqual=> It goes all the way down to the root node 