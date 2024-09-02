describe('Checkbox', () => {
    it('Checkbox', () => {
        cy.visit('https://the-internet.herokuapp.com/')
        cy.get(':nth-child(6) > a').click()
        cy.get(':nth-child(2) > input').uncheck()
    })
})