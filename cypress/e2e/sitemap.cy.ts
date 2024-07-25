describe('Sitemap test', () => {
  it('Visits the sitemap', () => {
    cy.visit('/sitemap')
    cy.contains('Sitemap')
    cy.title().should('equal', 'CMS Sitemap');
  })
})
