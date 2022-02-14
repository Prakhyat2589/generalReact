import React, { useContext } from "react";
import Context from "../context/Context";

const About = () => {
  const { books } = useContext(Context);
  return (
    <>
      <div>This is About page</div>
      <div>
        <ul>
          {books &&
            books.map((book) => {
              return <li key={book.title}>{book.name}</li>;
            })}
        </ul>
      </div>
    </>
  );
};

export default About;
