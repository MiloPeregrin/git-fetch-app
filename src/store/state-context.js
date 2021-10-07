import React, { useState } from "react";

const StateContext = React.createContext(null);

export const StateContextProvider = (props) => {
  const [username, setUsername] = useState(null);
  const [isFetching, setIsFetching] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [repos, setRepos] = useState([]);
  const [orgs, setOrgs] = useState([]);

  const BASE_URL = "https://api.github.com";

  const getRepos = () => {
    const url = `${BASE_URL}/users/${username}/repos?per_page=250`;
    fetch(url).then((response) => {
      response.json().then((data) => {
        setRepos(data);
      });
    });
  };

  const searchHandler = (user, event) => {
    setUsername(user);
    getRepos(username);
    console.log(repos);
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
