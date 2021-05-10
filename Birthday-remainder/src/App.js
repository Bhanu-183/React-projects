import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { data } from "./data";
import React, { useState } from "react";
import "./index.css";
import List from "./List";

function App() {
  const [people, setPeople] = useState(data);
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-5">
          <h1>{people.length} Birthdays today</h1>
          <List people={people} />
          <button
            className="btn btn-danger btn-lg mt-5"
            onClick={() => setPeople([])}
          >
            Clear All
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
