import RestaurantList from './RestaurantList';                
import { useRestaurants } from '../../hooks/useRestaurants';
import SearchBox from '../SearchBox';

const RestaurantListContainer = () => {                  
  const { restaurants, term, setTerm } = useRestaurants();          
  // return <RestaurantList restaurants={restaurants} />       
  return (
  <>      
    <SearchBox term={term} onSearch={setTerm} />        
    <RestaurantList restaurants={restaurants} />              
  </>);             
}                
                  
export default RestaurantListContainer; 