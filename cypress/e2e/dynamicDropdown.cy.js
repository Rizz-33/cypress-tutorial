describe('Dynamic Dropdown Test', () => {
    it('Dynamic dropdown', () => {
        cy.visit('https://www.yatra.com', {headers: {"Accept-Encoding": "gzip, deflate"}})
        cy.get('#BE_flight_origin_city').type('NEW')
        cy.get('.ac_results > :nth-child(1)').click()
        cy.get('#BE_flight_arrival_city').type('DEL')
        cy.get('.ac_results > :nth-child(1)').click()
    })
})