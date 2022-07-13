/// <reference types="Cypress"/>

 

beforeEach(()=>{
    cy.visit('http://localhost:3000')
})

describe("check for input",()=>{
    it("should autofocus",()=>{
        cy.get(".FormInput").should("have.attr","autofocus")
    })
    it("should type on dom",()=>{
        cy.get(".input_val").should("be.empty")
        cy.get(".FormInput").type("Hey this is me")
        cy.get(".input_val").should("have.text","Hey this is me")
    })
})