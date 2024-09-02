describe('Redio Button', () => {
    it('Redio button', () => {
        cy.visit('https://parabank.parasoft.com/parabank/index.htm')
        cy.get('#loginPanel > :nth-child(3) > a').click()
        cy.get("input[name='username']").type('Rizzz')
        cy.get("input[name='password']").type('Rizzz')
        cy.get('.login > .button').click()
        cy.get('.leftmenu > :nth-child(6) > a').click()
        cy.get('#accessMode1')
        .check()
        .should('be.checked')
        cy.get('#accessMode2')
        .check()
        .should('be.checked')
    })
})