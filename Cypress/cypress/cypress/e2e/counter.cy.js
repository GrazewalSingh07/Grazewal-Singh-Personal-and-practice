/// <reference types="Cypress"/>

describe("Checking Counter",()=>{
    it("should exist in the dicument",()=>{
        //this is the flow of the user
        cy.visit('http://localhost:3000')
        cy.get('h2').should('exist');
        cy.get('.increment_count').should('exist')
        cy.get('.decrement_count').should('exist')
    })
    it("should increment  counter",()=>{
        cy.visit('http://localhost:3000')
        cy.get('h2').should("have.text","Count is 0")
        cy.get('.increment_count').click();
        cy.get('h2').should("have.text", "Count is 1")
    })
})