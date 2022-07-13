/// <reference types="Cypress"/>

beforeEach(()=>{
    cy.visit('http://localhost:3000')
})
describe('CheCk for counter spec', () => {
    it('Should exist', () => {
    
      cy.get('h1').should(`exist`)
      cy.get(".IncButton").should(`exist`)
    })
    it("should check  if incbutton working",()=>{
        cy.get('h1').should("have.text","Count :0")
        cy.get(".IncButton").click()
        cy.get('h1').should("have.text","Count :1")
    })
    it("should check  if incbutton multiple times",()=>{
        cy.get('h1').should("have.text","Count :0")
        cy.get(".IncButton").click()
        cy.get(".IncButton").click()
        cy.get(".IncButton").click()
        cy.get(".IncButton").click()
        cy.get(".IncButton").click()

        cy.get('h1').should("have.text","Count :5")
    })
  })

