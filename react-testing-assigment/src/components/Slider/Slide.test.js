import { getByTestId, render,screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import App from "../../App"
import { Slider } from "./Slider"


describe("Running test cases for slider",()=>{
    it("should render App correctly",()=>{
        render(<App/>)
        let app= screen.getByTestId("App")
        expect(app).toBeInTheDocument()
    })
    it("should render Slider component",()=>{
        render(<App/>)
        let slider=screen.getByTestId("Slider")
        expect(slider).toBeInTheDocument()
    })
    it("should chnage slide to next ", ()=>{
        render(<App/>)
        let line=screen.getByText("Question is :- 1")
        expect(line).toHaveTextContent("1")
        let button=screen.getByText("Next")
        userEvent.click(button)
        expect(line).toHaveTextContent("2")
    })

    it("should chnage slide to next ", ()=>{
        render(<App/>)
        let line=screen.getByText("Question is :- 1")
        expect(line).toHaveTextContent("1")
        let button=screen.getByText("Next")
        userEvent.click(button)
        expect(line).toHaveTextContent("2")
        let buttonPrev=screen.getByText("Prev")
        userEvent.click(buttonPrev)
        expect(line).toHaveTextContent("1")
    })
})