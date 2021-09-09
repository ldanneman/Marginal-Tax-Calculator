import { Given, When, And, Then} from "cypress-cucumber-preprocessor/steps";

Given('I am on the home page', () => {
    cy.visit('http://127.0.0.1:5500')
  })

  When('I enter a {int} amount as input', (salary) => {
    cy.get('.input').type(salary);
  })

  And('I click Submit', () => {
    cy.get('.submit').click();
  })

  Then('The {int} should be displayed', (result) => {
    cy.get('.result').should('have.text', result);
  })