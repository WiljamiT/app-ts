import {render, screen, within} from '@testing-library/react';    
import RestaurantDetails from './RestaurantDetails';

describe("RestaurantDetails", () => {                  
  it("renders title", () => {                  
    const props = {                  
      restaurant: {                  
        id: 1,                  
        name: "Eka",                  
      },                  
    };                
                  
    render(<RestaurantDetails {...props} />);                
                  
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
                    
    render(<RestaurantDetails {...props} />);                
                    
    const description = screen.getByText(props.restaurant.description);                  
    expect(description).toBeInTheDocument();                  
  });
}); 