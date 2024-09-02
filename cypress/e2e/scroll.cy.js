describe('Scroll', () => {
    it('Scroll', () => {
        cy.visit('https://parabank.parasoft.com/parabank/index.htm')
        cy.scrollTo('bottom').wait(2000)
        cy.scrollTo('top').wait(2000)
        cy.get('.visit > :nth-child(2) > a').scrollIntoView().wait(2000)
        cy.scrollTo(0,60)
    })
})