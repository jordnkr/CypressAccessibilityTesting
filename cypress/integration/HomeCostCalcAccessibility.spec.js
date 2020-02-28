context('Home Cost Calculator axe-core testing', () => {
    describe('Home page Accessibility', () => {
        it('Passes accessibility tests', () => {
            cy.visit('/')
            cy.injectAxe()
            cy.checkA11y()
        })
    })
    
    Object.keys(Cypress.env('endpoints')).forEach((url) => {
        it ('Run axe-core against: ' + url, () => {
            cy.visit(Cypress.env('endpoints')[url])
            cy.injectAxe()
            cy.checkA11y(Cypress.env('A11Y_OPTIONS'))
        })
    })
})