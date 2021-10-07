import React, { useState } from "react";

const StateContext = React.createContext({
  username: null,
  isFetching: false,
  disabled: true,
});

export const StateContextProvider = (props) => {
  const [username, setUsername] = useState(null);
  const [isFetching, setIsFetching] = useState(false);
  const [disabled, setDisabled] = useState(true);

  const contextValue = {
    username,
    isFetching,
    disabled,
  };

  const searchHandler = () => {
    setUsername("DUMMY SEARCH FIELD INPUT");
  };

  return (
    <StateContext.Provider value={contextValue}>
      {props.children}
    </StateContext.Provider>
  );
};

export default StateContext;
