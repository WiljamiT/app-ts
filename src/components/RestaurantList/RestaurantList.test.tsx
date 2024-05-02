import React from 'react';                  
import {render, screen, within} from '@testing-library/react';                
import RestaurantList from './RestaurantList';
import {act} from 'react';
import { MemoryRouter as Router } from "react-router-dom";                
import SearchBox from '../SearchBox';
import userEvent from '@testing-library/user-event';
                  
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

  describe("SearchBox", () => {                
    it("renders input", () => {                
      const props = {                
        term: "",                
        onSearch: jest.fn(),                
      };              
                  
      render(<SearchBox {...props} />);                
      const input = screen.getByRole("textbox");                
      userEvent.type(input, "Eka");              
                  
      expect(props.onSearch).toHaveBeenCalled();                
    });          
    
    it('trim empty strings', () => {                
      const props = {                
        term: '',                
        onSearch: jest.fn()                
      }              
                  
      render(<SearchBox {...props} />);                
      const input = screen.getByRole("textbox");                
      userEvent.type(input, '  ');              
                  
      expect(props.onSearch).not.toHaveBeenCalled();                
    }) 
  });
  
}); 