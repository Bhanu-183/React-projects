import React from "react";

const Book = (props) => {
  // const {img,title,author}=props.book; can be used
  console.log(props.book);

  const clickHandler = () => {
    alert("Item added to cart");
  };

  const example = (author) => {
    console.log(author);
  };
  return (
    <article className="book">
      <img src={props.book.img} alt="" />
      <h1 onClick={() => console.log(props.book.title)}>{props.book.title}</h1>
      <h4>{props.book.author}</h4>
      <button onClick={clickHandler}>ADD TO CART</button>
      <button onClick={() => example(props.book.author)}>Example</button>
      {/* To pass any value to the event handler we have to send it through arrow function */}
      {/* For props Childern */}
      {props.children}
    </article>
  );
};

export default Book;
