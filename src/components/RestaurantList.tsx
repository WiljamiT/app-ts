import type Restaurant from './types';              
                
const RestaurantList = ({restaurants}: {restaurants: Restaurant[]}, ) => {                
  return <div data-test='restaurant-list'>                
    {                
      restaurants.map((restaurant, i) => (
      <div className='restaurant-item' key={i}>                
        <h2 className='title'>{restaurant.name}</h2>                
      </div>
      ))                
    }                
  </div>;                
}              
                
export default RestaurantList; 