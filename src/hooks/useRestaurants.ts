import { useEffect, useState } from "react";
import { Restaurant } from "../types";
import axios from "axios";

export const useRestaurants = () => {                
    const [restaurants, setRestaurants] = useState<Restaurant[]>([]);                
    const [loading, setLoading] = useState<boolean>(false);                
    const [error, setError] = useState<boolean>(false);              
                  
    const [term, setTerm] = useState<string>(''); 

    useEffect(() => {        
        const fetchRestaurants = async (term: string) => {                  
            setError(false);                  
            setLoading(true);                
                        
            try {                  
              const response = await axios.get(`http://localhost:8080/restaurants?q=${term}&_sort=id`);                  
              setRestaurants(response.data);                  
            } catch (e) {                  
              setError(true);                  
            } finally {                  
              setLoading(false);                  
            }                  
          }               
                  
      fetchRestaurants(term);                
    }, [term])              
                  
    return {                
      loading,                
      error,                
      restaurants,
      term,
      setTerm                
    }                
  }   