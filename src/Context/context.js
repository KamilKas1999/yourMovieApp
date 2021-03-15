import React, { useState } from "react";

export const Context = React.createContext({
  appKey: "08d59877d604cd11d20114844266e92e",
});

const ContextProvider = (props) => {
  const [key] = useState("08d59877d604cd11d20114844266e92e");
  return (
    <Context.Provider value={{ appKey: key }}>
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;
