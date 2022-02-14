import React, { useState } from "react";
import Context from "./Context";

const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    { title: 1, name: "Harry Potter 1" },
    { title: 2, name: "Harry Potter 2" },
    { title: 3, name: "Harry Potter 3" },
  ]);

  return (
    <Context.Provider value={{ books }}>{props.children}</Context.Provider>
  );
};

export default BookContextProvider;
