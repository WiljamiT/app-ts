import Typography from '@mui/material/Typography';
import RestaurantListContainer from './components/RestaurantList/RestaurantListContainer';
import { Route, Routes } from 'react-router';
import RestaurantDetailContainer from './components/RestaurantDetail/RestaurantDetailContainer';
import "./App.css"

function App() {
  return (                  
    <div className='App'>                  
      <Typography variant='h2' component='h2' data-test='heading'>                  
        App                  
      </Typography>    
      <Routes>
        <Route path="/" element={ <RestaurantListContainer /> } />
        <Route path="/restaurants/:id" element={ <RestaurantDetailContainer /> } />
      </Routes>            
    </div>                  
  );                  
}                
                  
export default App;  