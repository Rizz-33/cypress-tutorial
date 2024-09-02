describe('Launch Application', () => {
    it('Launch the test application', () => {
        cy.visit('https://parabank.parasoft.com/parabank/index.htm')
        cy.get("input[name='username']").type('rizz')
        cy.get("input[name='password']").type('rizz')
    })
})