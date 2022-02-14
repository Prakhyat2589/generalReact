import React, { useState } from "react";

const Counter = ({ parentCallback }) => {
  const [counter, setCounter] = useState(0);

  const updateCounter = () => {
    const newValue = counter + 1;
    setCounter(newValue);
    // parentCallback(newValue);
  };

  return (
    <div>
      {counter}
      <button onClick={updateCounter}>Update Counter</button>
    </div>
  );
};

export default Counter;
