import React, { useState } from "react";

const StateContext = React.createContext(null);

export const StateContextProvider = (props) => {
  const [username, setUsername] = useState(null);
  const [isFetching, setIsFetching] = useState(false);
  const [disabled, setDisabled] = useState(true);

  // const searchHandler = (user) => {
  //   setUsername(user.target.value);
  //   console.log(user);
  // };

  const searchHandler = (user, event) => {
    setUsername(user);
    console.log(username);
  };

  const contextValue = {
    username,
    isFetching,
    disabled,
    searchHandler,
  };

  return (
    <StateContext.Provider value={contextValue}>
      {props.children}
    </StateContext.Provider>
  );
};

export default StateContext;
