describe('Select file Func', () => {
    it('Select file', () => {
        cy.visit('https://www.zoho.com/books/accounting-software-demo/#/timesheet/alltimeentries?filter_by=Status.All%2CDate.All&per_page=50')
        cy.get('#ember302 > .list-actions > .btn-toolbar').realHover()
        cy.get('.list-actions > .btn-toolbar > :nth-child(3)').click()
    })
})