describe('Select file Func', () => {
    it('Select file', () => {
        cy.visit('https://www.zoho.com/books/accounting-software-demo/#/salesorders/new')
        cy.get('.file-upload-container').scrollIntoView()
        cy.get('#ember332').selectFile('C:\\cypress-automation\\cypress\\e2e\\selectFile.cy.js')
        cy.get('#ember332').selectFile(['C:\\cypress-automation\\cypress\\e2e\\checkboc.cy.js', 'C:\\cypress-automation\\cypress\\e2e\\clearInput.cy.js'])
        cy.get('#ember332').selectFile('C:\\cypress-automation\\cypress\\e2e\\scroll.cy.js' , {force: true})
    })
})