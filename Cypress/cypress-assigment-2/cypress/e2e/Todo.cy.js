/// <reference types="Cypress"/>


beforeEach(()=>{
    cy.visit("http://localhost:3000/")
})
describe("Should render app",()=>{
    it("should check for add todo",()=>{
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

    // 

    it("should check for delete todo",()=>{
        cy.get(".list").children().should("have.length","2")
        cy.get(".delete_button").eq(1).click()
        cy.get(".list").children().should("have.length","1")
    })
    it("should check for todo delete button exists",()=>{
 
        cy.get(".delete_button").should("exist")
    })
    it("should check if check box is getting created with every new todo",()=>{
       
        cy.get(".input_todo").type("Learn Redux")
        cy.get(".input_submit").click()
        cy.get(".list").children().eq(2).children().should("have.class","checkbox")
    })
    it("should check if check box is getting created with every new todo",()=>{
       
        cy.get(".checkbox").eq(1).click()
        cy.get(".success").should("exist")
        
    })
    //checkbox
})