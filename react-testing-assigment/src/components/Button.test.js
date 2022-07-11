import { render ,screen} from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import App from "../App"
import { Button } from "./Button"


describe("should render without any error",()=>{
        it("Renders <App /> component correctly",()=>{
            render(<App></App>)
            const app = screen.getByTestId("App");
            expect(app).toBeInTheDocument()
        })
        it("should have add and reduce buttons",()=>{
            render(<App/>)
            let add=screen.getByText("ADD")
            let Reduce=screen.getByText("REDUCE")
            expect(add).toBeInTheDocument()
            expect(Reduce).toBeInTheDocument()
        })
        it("should have an element with counter value as default ( 0 )",()=>{
            render(<App/>)
            let line=screen.getByText("Count is 0")
            expect(line).toBeInTheDocument()
        })
        it("onClick of ADD, value of Counter should increment by 5",()=>{
            render(<App/>)
            let line=screen.getByText("Count is 0")
            expect(line).toHaveTextContent("0")
            let addbtn=screen.getByText("ADD")
            userEvent.click(addbtn)
            expect(line).toHaveTextContent("5")
        })
        it("onClick of REDUCE, the value of Counter should decrement by 5",()=>{
            render(<App/>)
            let line=screen.getByText("Count is 0")
            expect(line).toHaveTextContent("0")
            let reduce=screen.getByText("REDUCE")
            userEvent.click(reduce)
            expect(line).toHaveTextContent("-5")
        })

})