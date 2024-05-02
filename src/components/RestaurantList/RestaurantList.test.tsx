import React from 'react';                  
import {render, screen, within} from '@testing-library/react';                
import RestaurantList from './RestaurantList';
import {act} from 'react';
import { MemoryRouter as Router } from "react-router-dom";                
                  
const renderWithRouter = (component: JSX.Element) => {                  
  return {                  
    ...render(<Router>{component}</Router>),                  
  };                  
};  
                  
                  
describe('RestaurantList', () => {                  
  it('render restaurants', async () => {                  
    const props = {                  
      restaurants: [                  
        { 'name': 'Eka', 'id': 1 },                  
        { 'name': 'Toka', 'id': 2 },                  
      ]                  
    };                  
    renderWithRouter(<RestaurantList {...props} />);                
                  
    const headings = await screen.findAllByRole('heading')                
                  
    headings.forEach((heading, index) => {                  
      expect(heading).toHaveTextContent(props.restaurants[index].name);                  
    });                  
  })     
}); 