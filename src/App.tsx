import Typography from '@mui/material/Typography';
import RestaurantList from './components/RestaurantList';

function App() {
  const restaurants = [
    {name: 'Eka'}, 
    {name: 'Toka'}
  ];

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