import { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import RestaurantList from './components/RestaurantList';
import Restaurant from './components/types';

function App() {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

  useEffect(() => {
    axios.get("http://localhost:8080/restaurants")
    
    .then(res => setRestaurants(res.data));
  }, []);

  return (                  
    <div className='App'>                  
      <Typography variant='h2' component='h2' data-test='heading'>                  
        App                  
      </Typography>    
      <RestaurantList restaurants={restaurants} />              
    </div>                  
  );                  
}                
                  
export default App;  