import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import Tours from "./Tours";
import "./index.css";
const url = "https://course-api.com/react-tours-project";
function App() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const fetchTours = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setTours(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return <h2 className="text-center mt-5">Loading Data...</h2>;
  }

  if (tours.length === 0) {
    return (
      <div className="container text-center mt-5">
        <h2 className="display-4 mt-5">No tours left..</h2>
        <button className="btn btn-lg btn-dark" onClick={() => fetchTours()}>
          Refresh
        </button>
      </div>
    );
  }

  return (
    <>
      <Tours tours={tours} removeTour={removeTour} />
    </>
  );
}

export default App;
