import React from "react";
import Tour from "./Tour";
function Tours({ tours, removeTour }) {
  return (
    <div className="container-fluid">
      <div className="container text-center">
        <h1 className="display-2">Our Tours</h1>
        {tours.map((tour) => {
          return (
            <div className="container text-center" key={tour.id}>
              <Tour {...tour} removeTour={removeTour} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Tours;
