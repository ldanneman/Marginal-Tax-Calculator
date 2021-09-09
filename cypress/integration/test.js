describe('Marginal Calculator', () => {
    it('User Calculates Taxes', () => {
      cy.visit('http://127.0.0.1:5500/index.html')
      cy.get('.input').type(100000)
      cy.get('.submit').click()
      cy.get('.result').should('have.text', 18020.86)
    })
  })   