import { Button, Card, CardActionArea, CardActions, CardContent, Grid, Typography } from '@mui/material';
import type { Restaurant } from '../../types';              
import { Link } from 'react-router-dom';
                
const RestaurantList = ({restaurants}: {restaurants: Restaurant[]}, ) => {                
  return (                
    <div data-test="restaurant-list">                
      <Grid container spacing={3} marginTop={"1rem"}>                
        {restaurants.map((restaurant) => (                
          <Grid item xs={4} sm={4} key={restaurant.id} className="restaurant-item">                
            <Card>                
              <CardActionArea>                
                <CardContent>                
                  <Typography gutterBottom variant="h5" component="h2">                
                    {restaurant.name}                
                  </Typography>                
                  <Typography                
                    variant="body2"                
                    color="textSecondary"                
                    component="p"                
                  >                
                    {restaurant.description}                
                  </Typography>                
                </CardContent>                
              </CardActionArea>                
              <CardActions>                
                <Button size="small" color="primary">                
                  <Link to={`/restaurants/${restaurant.id}`}>View Details</Link>                
                </Button>                
              </CardActions>                
            </Card>                
          </Grid>                
        ))}                
      </Grid>                
    </div>                
  );                
}; 
                
export default RestaurantList; 