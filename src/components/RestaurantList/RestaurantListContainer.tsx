import RestaurantList from './RestaurantList';                
import { useRestaurants } from '../../hooks/useRestaurants';
                  
const RestaurantListContainer = () => {                  
  const { loading, error, restaurants } = useRestaurants();          
  
  if (loading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>Error...</p>
  }
  
  return <RestaurantList restaurants={restaurants} />                  
}                
                  
export default RestaurantListContainer; 