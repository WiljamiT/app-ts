import axios from 'axios';

describe('App-react application', function() {    
  before(() => {                  
    return axios                  
      .delete('http://localhost:8080/restaurants?_cleanup=true')                  
      .catch((err) => err);                  
  });                
                    
  afterEach(() => {                  
    return axios                  
      .delete('http://localhost:8080/restaurants?_cleanup=true')                  
      .catch(err => err)                  
  })                
                    
  beforeEach(() => {                  
    const restaurants = [                  
      { 'name': 'Eka', 'id': 1 },                  
      { 'name': 'Toka', 'id': 2 },
      { 'name': 'Kolmas', 'id': 3 }                  
    ]                
                    
    return restaurants.map(item =>                  
      axios.post('http://localhost:8080/restaurants', item,                  
        { headers: { 'Content-Type': 'application/json' } }                  
      )                  
    )                  
  }) 

  it('Visits the app-react', function() {                  
    cy.visit('http://localhost:3000/');                  
    cy.get('h2[data-test="heading"]').contains('App')                  
  })
  
  it('Shows a restaurant list', () => {                
    cy.visit('http://localhost:3000/');                
    cy.get('div[data-test="restaurant-list"]').should('exist');                
    cy.get('div.restaurant-item').should((restaurants) => {                
      expect(restaurants).to.have.length(3);              
                  
      const titles = [...restaurants].map(x => x.querySelector('h2').innerHTML);                
      expect(titles).to.deep.equal(                
        ['Eka', 'Toka', 'Kolmas']                
      )    
                  
    }) 
  })

  it('Goes to the detail page', () => {              
    cy.visit('http://localhost:3000/');              
    cy.get('div.restaurant-item').contains('View Details').eq(0).click();              
    cy.url().should('include', "/restaurants/1")
    cy.get('h2.restaurant-title').contains('Eka');              
  }); 

  it('Searches for a title', () => {              
    cy.visit('http://localhost:3000/');              
    cy.get('div.restaurant-item').should('have.length', 4);              
    cy.get('[data-test="search"] input').type('design');              
    cy.get('div.restaurant-item').should('have.length', 1);              
    cy.get('div.restaurant-item').eq(0).contains('Toka');              
  }); 
  
  
})