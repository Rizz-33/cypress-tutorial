describe('Clear', () => {
    it('Clear', () => {
        cy.visit('https://parabank.parasoft.com/parabank/index.htm')
        cy.get(':nth-child(2) > .input').type('Rizz')
        cy.get(':nth-child(2) > .input').clear()
    })
})