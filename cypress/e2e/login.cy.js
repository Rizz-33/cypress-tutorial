describe('Login Func', () => {
    it('Login user', () => {
        cy.visit('https://parabank.parasoft.com/parabank/index.htm')
        cy.get('#loginPanel > :nth-child(3) > a').click()
        cy.get("input[name='username']").type('Rizz')
        cy.get("input[name='password']").type('Rizz')
        cy.get('.login > .button').click()
        cy.get('tbody > :nth-child(1) > :nth-child(1) > a').click()
        cy.get('#month').select('March')
    })
})