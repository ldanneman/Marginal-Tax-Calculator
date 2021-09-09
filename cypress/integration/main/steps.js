import { Given, When, Then} from "cypress-cucumber-preprocessor/steps";

Given('I navigate to the home page', () => {
    cy.visit('http://127.0.0.1:5500')
  })

  When('the home page has loaded', () => {
    cy.get('.calculator').should('be.visible');
  })

  Then('I see the home page', () => {
    cy.get('.input').should('be.visible');
    cy.get('.submit').should('be.visible');
  })