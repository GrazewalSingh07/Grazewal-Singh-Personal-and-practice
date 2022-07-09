/// <reference types="Cypress"/>

describe("Checking Todos Application",()=>{
    it("should have the basic structure",()=>{
        cy.visit("http://example.cypress.io/todo")
       // input box is present
        cy.get(".new-todo").should("exist")
       
       //check if todo cont is present
       cy.get(".todo-count").should("exist")
      
       //if filters are present
       cy.get(".filters").should("exist")



    })
    //check if the user is able to add some todos

    it("check if the user is able to add some todos",()=>{
        cy.visit("http://example.cypress.io/todo")
        cy.get('.todo-list').children().should('have.length',2)
        cy.get(".new-todo").type("Learn Cypress{enter}")
        cy.get('.todo-list').children().should('have.length',3)
    })
})