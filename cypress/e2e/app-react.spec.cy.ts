describe('App-react application', function() {                  
  it('Visits the app-react', function() {                  
    cy.visit('http://localhost:3000/');                  
    cy.get('h2[data-test="heading"]').contains('App')                  
  })                  
})  