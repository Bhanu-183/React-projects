import React, { useState } from "react";
import "./index.css";
function Tour({ id, name, image, info, price, removeTour }) {
  const [readMore, setReadMore] = useState(false);
  return (
    <>
      <div className="card text-center mt-5">
        <img src={image} className="card-img-top img-fluid" alt="Not Found" />
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p className="card-text">
            {readMore ? info : `${info.substring(0, 200)}...`}
            <button
              className="btn text-info"
              onClick={() => setReadMore(!readMore)}
            >
              {readMore ? "Show Less" : "Read More"}
            </button>
          </p>
          <h3 className="text-warning">Price=${price}</h3>
          <button
            className="btn-outline-danger btn remove"
            type="submit"
            onClick={() => removeTour(id)}
          >
            Not Intrested
          </button>
        </div>
      </div>
    </>
  );
}
export default Tour;
