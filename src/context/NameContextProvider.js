import React, { useState } from "react";
import Context from "./Context";

const NameContextProvider = (props) => {
  const { nameProvider } = props;
  console.log("nameProvider::", nameProvider);
  const [name, setName] = useState(nameProvider);

  return <Context.Provider value={{ name }}>{props.children}</Context.Provider>;
};

export default NameContextProvider;
