describe('Regression Test', () => {
    it('should perform regression testing', () => {
        cy.visit('https://www.example.com');

        cy.title().should('contain', 'Example Domain');
    });
});