import {render, screen, within} from '@testing-library/react';    
import RestaurantDetails from './RestaurantDetails';
import { MemoryRouter as Router } from "react-router-dom";                
                  
const renderWithRouter = (component: JSX.Element) => {                  
  return {                  
    ...render(<Router>{component}</Router>),                  
  };                  
};  

describe("RestaurantDetails", () => {                  
  it("renders title", () => {                  
    const props = {                  
      restaurant: {                  
        id: 1,                  
        name: "Eka",                  
      },                  
    };                
                  
    renderWithRouter(<RestaurantDetails {...props} />);                
                  
    const title = screen.getByRole("heading");                  
    expect(title.innerHTML).toEqual(props.restaurant.name);                  
  });
  
  it("renders description", () => {                  
    const props = {                  
      restaurant: {                  
        id: 1,                  
        name: "Eka",                  
        description:                  
          "jea",                  
      },                  
    };                
                    
    renderWithRouter(<RestaurantDetails {...props} />);                
                    
    const description = screen.getByText(props.restaurant.description);                  
    expect(description).toBeInTheDocument();                  
  });

  it("displays the restaurants name when no description was given", () => {                
    const props = {                
      restaurant: {                
        id: 1,                
        name: "Eka",                
      },                
    };              
                  
    renderWithRouter(<RestaurantDetails {...props} />);              
                  
    const description = screen.getByTestId("restaurant-description");                
    expect(description).toHaveTextContent(props.restaurant.name);                
  });  

  it('Shows *more* link when description is too long', () => {              
    const props = {              
      restaurant: {              
        id: 1,              
        name: 'Eka',              
        description: 'More than 300 chars asdfghjkl asdfghjkl asdfghjkl asdfghjkl... More than 300 chars asdfghjkl asdfghjkl asdfghjkl asdfghjkl... More than 300 chars asdfghjkl asdfghjkl asdfghjkl asdfghjkl... More than 300 chars asdfghjkl asdfghjkl asdfghjkl asdfghjkl... More than 300 chars asdfghjkl asdfghjkl asdfghjkl asdfghjkl...'              
      }              
    };            
                
    renderWithRouter(<RestaurantDetails {...props} />);            
                
    const link = screen.getByText('Show more...');              
    expect(link).toBeInTheDocument();            
                
    const description = screen.getByTestId("restaurant-description");              
    expect(description).toHaveTextContent('More than 300 chars asdfghjkl asdfghjkl asdfghjkl asdfghjkl... More than 300 chars asdfghjkl asdfghjkl asdfghjkl asdfghjkl... More than 300 chars asdfghjkl asdfghjkl asdfghjkl asdfghjkl... More than 300 chars asdfghjkl asdfghjkl asdfghjkl asdfghjkl... More than 300 chars asdfghjkl asdfghjkl asdfghjkShow more...');              
  });
}); 