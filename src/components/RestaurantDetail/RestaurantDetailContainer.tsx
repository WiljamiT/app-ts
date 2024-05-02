import { useRestaurant } from "../../hooks/useRestaurant";
import RestaurantDetails from "./RestaurantDetails";
                  
const RestaurantDetailContainer = () => {                  
  const { restaurant } = useRestaurant();
  
  return <RestaurantDetails restaurant={restaurant} />
}

export default RestaurantDetailContainer;  