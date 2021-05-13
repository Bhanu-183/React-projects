import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import "./index.css";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

function App() {
  const [text, setText] = useState("");
  const [todo, setTodo] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text) {
      const temp = { id: new Date().getTime().toString(), text };
      setTodo([...todo, temp]);
      setText("");
    } else {
      console.log("Empty Values");
    }
  };

  const handleRemove = (id) => {
    let newTodo = todo.filter((item) => item.id !== id);
    setTodo(newTodo);
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-5 text-center">
            <h1>To Do app</h1>
            <form onSubmit={handleSubmit} className="mt-4" autoComplete="off">
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="task"
                  value={text}
                  placeholder="Please enter your task"
                  onChange={(e) => setText(e.target.value)}
                />
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-success btn-lg">
                  ADD
                </button>
                <br></br>
                <button
                  className="btn btn-lg btn-danger mt-4"
                  onClick={() => setTodo([])}
                >
                  Clear All
                </button>
              </div>
            </form>
            <br />
            <br />
            <h2>
              <u>Things to Do</u>
            </h2>
            {todo.map((task) => {
              return (
                <ul className="list-group" key={task.id}>
                  <li
                    className="list-group-item list-group-item-success mt-3"
                    data-aos="fade-right"
                  >
                    <h3>{task.text}</h3>
                    <button
                      className="btn btn-danger btn-sm remove"
                      onClick={() => handleRemove(task.id)}
                    >
                      Remove
                    </button>
                  </li>
                </ul>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
