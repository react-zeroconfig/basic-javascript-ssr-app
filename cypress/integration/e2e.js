describe('Sample Cypress Test', () => {
  it('Visits the main page', () => {
    cy.visit('http://localhost:3100');
    
    cy.get('#app').invoke('text').then(text => {
      expect(text).to.eq('SERVER VALUE');
    });
  });
});