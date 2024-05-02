import type { Restaurant } from '../../types';              
                
const RestaurantList = ({restaurants}: {restaurants: Restaurant[]}, ) => {                
  return <div data-test='restaurant-list'>                
    {                
      restaurants.map((restaurant) => (
      <div className='restaurant-item' key={restaurant.id}>                
        <h2 className='restaurant-title'>{restaurant.name}</h2>                
        <a href={`/restaurants/${restaurant.id}`}>View Details</a>
      </div>
      ))                
    }                
  </div>;                
}              
                
export default RestaurantList; 