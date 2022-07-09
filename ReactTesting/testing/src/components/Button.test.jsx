import {render,screen,fireEvent} from "@testing-library/react"
import App from "../App"
import { Button } from "./Button"
import renderer from "react-test-renderer"
import userEvent from "@testing-library/user-event"
//this render will test our dom virtually. it is like fake rendered method, it will not create dom in actual
describe("Button Test",()=>{
    it("Should have button dom",()=>{
        render(<Button>Click Me</Button>);
        // screen.debug()

        let button=screen.getByText("Click Me") //screen.getbyttest is like document.getelementbyid
        expect(button).toBeInTheDocument()
        // second try
       
    })
    it(" should have button with text Click Me in app.js",()=>{
        render (<App></App>)
        let button=screen.getByTestId("cButton")
        expect(button).toBeInTheDocument()
        // in above test
        //if i endered app and in app we have other element with text "Click Me" and button didn't had "Click Me" but the test still passed
        // so  using getByText is not a good idea

    })
    it("It should render empty button,",()=>{
        render(<Button></Button>)
        let button=screen.getByTestId("cButton");
        expect(button).toBeEmptyDOMElement()
        //it will check if Button has any children
    })
    it("It should change theme",()=>{
        render(<App></App>)
        let h3= screen.getByText("Current Theme is light")
        expect(h3).toHaveTextContent("light")

        let themeButton=screen.getByText("Change Theme");
        userEvent.click(themeButton)// userEvent mimic the behaviour of user click a button
        // we can use fireEvent in place of userEvent as well
        // It is same thing
        expect(h3).toHaveTextContent("dark")
    })
    it("Should call the given function",()=>{
        const mockfn=jest.fn()
        // we dont care what this function is  
        render(<Button onclick={mockfn}> Click Me</Button>)
        const btn=screen.getByTestId("cButton")
        fireEvent.click(btn) //or we can write userEvent.click(btn)
        // expect(mockfn).toBeCalled()
        fireEvent.click(btn)
        expect(mockfn).toBeCalledTimes(2)// it check how many times a particular btn is clicked
    })

    //SnapShot -->
    // Screenshots are Represented  in a particular formate
    it("should match snapshot",()=>{
       const tree= renderer.create(<Button colorScheme={"green"} variant={"ghost"}>Add counter</Button>).toTree()
       expect(tree).toMatchSnapshot()
    })
    /// if someone chaged anything in btn component
    // it will fail
    // and ask if we want to overwrite
   // we press w for options
   // and them press u to update snapshot
// we can use toJSON or toTree 
// toTree gives more details
})
