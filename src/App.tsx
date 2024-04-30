import Typography from '@mui/material/Typography';
import RestaurantListContainer from './components/RestaurantListContainer';

function App() {
  return (                  
    <div className='App'>                  
      <Typography variant='h2' component='h2' data-test='heading'>                  
        App                  
      </Typography>    
      <RestaurantListContainer />            
    </div>                  
  );                  
}                
                  
export default App;  