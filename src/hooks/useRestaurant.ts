import { useEffect, useState } from "react";
import { Restaurant } from "../types";
import axios from "axios";
import { useParams } from "react-router";

export const useRestaurant = () => {  
    const { id } = useParams<string>();                
    const [restaurant, setRestaurant] = useState<Restaurant>(({ id: 0, name: "" }));                
    const [loading, setLoading] = useState<boolean>(false);                
    const [error, setError] = useState<boolean>(false);              
                  
    useEffect(() => {        
        const fetchRestaurants = async () => {
          
          setError(false);                  
          setLoading(true); 
            try {                  
              const restaurant = await axios.get(`http://localhost:8080/restaurants/${id}`);                  
              setRestaurant(restaurant.data);                  
            } catch (e) {                  
              setError(true);                  
            } finally {                  
              setLoading(false);                  
            }                  
          };                 
                  
      fetchRestaurants();                
    }, [id])              
                  
    return {                
      loading,                
      error,                
      restaurant         
    }                
  }   