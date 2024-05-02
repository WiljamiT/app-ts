import React, { useState } from 'react';
import { Restaurant } from "../../types";

const MAX_DESCRIPTION_LENGTH = 300;

const getDescriptionFor = (restaurant: Restaurant) => {
  return restaurant.description ? restaurant.description : restaurant.name;
};

const TruncatedDescription = ({ description }: { description: string }) => {
  const [expanded, setExpanded] = useState(false);

  if (description.length <= MAX_DESCRIPTION_LENGTH) {
    return <>{description}</>;
  }

  return (
    <>
      {expanded ? (
        <>
          {description}
          <button onClick={() => setExpanded(false)}>Show less</button>
        </>
      ) : (
        <>
          {description.slice(0, MAX_DESCRIPTION_LENGTH)}
          <button onClick={() => setExpanded(true)}>Show more...</button>
        </>
      )}
    </>
  );
};

const RestaurantDetails = ({ restaurant }: { restaurant: Restaurant }) => {
  return (
    <div className="detail">
      <h2 className="restaurant-title">{restaurant.name}</h2>
      <p className="restaurant-description" data-testid="restaurant-description">
        <TruncatedDescription description={getDescriptionFor(restaurant)} />
      </p>
    </div>
  );
};

export default RestaurantDetails;
