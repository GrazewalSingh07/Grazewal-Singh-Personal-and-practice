/// <reference types="Cypress"/>


beforeEach(()=>{
    cy.visit("http://localhost:3000/")
})
describe("Should render app",()=>{
    it("should check for todo",()=>{
        cy.get(".list").children().should("have.length","2")
        cy.get(".input_todo").type("Learn Redux")
        cy.get(".input_submit").click()
        cy.get(".list").children().should("have.length","3")
    })
    it("should through error",()=>{
        cy.get(".input_topd").should("have.length",0)
        cy.get(".input_submit").click()
        cy.get(".error").should("exist")
     
    })
})