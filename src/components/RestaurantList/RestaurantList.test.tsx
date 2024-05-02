import React from 'react';                  
import {render, screen, within} from '@testing-library/react';                
import RestaurantList from './RestaurantList';
import {act} from 'react';
                  
                  
describe('RestaurantList', () => {                  
  it('render restaurants', async () => {                  
    const props = {                  
      restaurants: [                  
        { 'name': 'Eka', 'id': 1 },                  
        { 'name': 'Toka', 'id': 2 },                  
      ]                  
    };                  
    render(<RestaurantList {...props} />);                
                  
    const headings = await screen.findAllByRole('heading')                
                  
    headings.forEach((heading, index) => {                  
      expect(heading).toHaveTextContent(props.restaurants[index].name);                  
    });                  
  })                  
}); 