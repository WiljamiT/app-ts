describe('App-react application', function() {                  
  it('Visits the app-react', function() {                  
    cy.visit('http://localhost:3000/');                  
    cy.get('h2[data-test="heading"]').contains('App')                  
  })
  
  it('Shows a restaurant list', () => {                
    cy.visit('http://localhost:3000/');                
    cy.get('div[data-test="restaurant-list"]').should('exist');                
    cy.get('div.restaurant-item').should((restaurants) => {                
      expect(restaurants).to.have.length(2);              
                  
      const titles = [...restaurants].map(x => x.querySelector('h2').innerHTML);                
      expect(titles).to.deep.equal(                
        ['Eka', 'Toka']                
      )    
                  
    }) 
  })  
})