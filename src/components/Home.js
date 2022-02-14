import React, { useState } from "react";
import Counter from "../Counter";

const Home = () => {
  const [name, setName] = useState();
  const [counter, setCounter] = useState();

  const handleChange = (e) => {
    setName(e.target.value);
  };
  const displayCounter = (count) => {
    setCounter(count);
  };
  return (
    <>
      <div>This is Home page</div>
      <input type="text" name="firstName" onChange={handleChange} />
      <div>{name}</div>
      <div>{counter}</div>
      <Counter parentCallback={displayCounter} />
    </>
  );
};

export default Home;
