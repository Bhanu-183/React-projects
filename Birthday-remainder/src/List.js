import React from "react";
import "./index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
const List = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        return (
          <article key={person.id} className="person">
            <img
              src={person.image}
              alt=""
              srcset=""
              className="img img-responsive"
            />
            <div className="txt text-justify">
              <h4>{person.name}</h4>
              <p>{person.age}</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
