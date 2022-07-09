const Time_Conversion =require("./index")
afterEach(() => {
    jest.clearAllMocks();
  });
describe('converting time to second,hour,minutes', () => { 

    test("testing conversion function for seconds",()=>{

       expect(Time_Conversion(900)).toBe("0.9 Second")
    })
    test("testing conversion function for seconds",()=>{

        expect(Time_Conversion(5200)).toBe("5 Seconds")
     })
     test("testing conversion function for seconds",()=>{

        expect(Time_Conversion(60000)).toBe("1 minute")
     })
     test("testing conversion function for seconds",()=>{

        expect(Time_Conversion(180000)).toBe("3 minutes")
     })
     test("testing conversion function for seconds",()=>{

        expect(Time_Conversion(3600000)).toBe("1 hour")
     })
     test("testing conversion function for seconds last",()=>{

        expect(Time_Conversion(43200000)).toBe("12 hours")
     })
    
 })