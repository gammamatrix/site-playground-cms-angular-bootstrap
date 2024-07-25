describe('Dashboard test', () => {
  it('Visits the dashboard', () => {
    cy.visit('/dashboard')
    cy.contains('Dashboard')
    cy.title().should('equal', 'CMS Dashboard');
  })
})
