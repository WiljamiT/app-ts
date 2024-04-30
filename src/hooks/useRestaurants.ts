import { useEffect, useState } from "react";
import Restaurant from "../components/types";
import axios from "axios";

const useRestaurants = () => {                
    const [restaurants, setRestaurants] = useState<Restaurant[]>([]);                
    const [loading, setLoading] = useState<boolean>(false);                
    const [error, setError] = useState<boolean>(false);              
                  
    useEffect(() => {        
        const fetchRestaurants = async () => {                  
            setError(false);                  
            setLoading(true);                
                        
            try {                  
              const res = await axios.get('http://localhost:8080/restaurants');                  
              setRestaurants(res.data);                  
            } catch (e) {                  
              setError(true);                  
            } finally {                  
              setLoading(false);                  
            }                  
          };                 
                  
      fetchRestaurants();                
    }, [])              
                  
    return {                
      loading,                
      error,                
      restaurants                
    }                
  }   

  export default useRestaurants;