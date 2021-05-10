import React from "react";
import ReactDom from "react-dom";

//CSS
import "./index.css";

//Importing the books array
import { books } from "./books";

//Importing the book component
import Book from "./Book";

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} book={book}></Book>;
        // Checkout the spread operator
        // return <Book key={book.id} {...book}></Book>; and can use only props in component
      })}
    </section>
  );
}

ReactDom.render(<BookList />, document.getElementById("root"));
