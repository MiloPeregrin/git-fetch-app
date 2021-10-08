import React, { useState, useEffect } from "react";
import axios from "axios";

const StateContext = React.createContext(null);

export const StateContextProvider = (props) => {
  const [username, setUsername] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [repos, setRepos] = useState([]);
  const [orgs, setOrgs] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  const BASE_URL = "https://api.github.com";

  const handleSearch = async () => {
    console.log("handleSearch", username);
    try {
      const url = `${BASE_URL}/users/${username}/repos?per_page=250`;
      const result = await axios(url);
      setRepos(result);
    } catch (err) {
      console.log(err);
    }
  };

  console.log("setRepos:", repos);

  const contextValue = {
    username,
    disabled,
    repos,
    orgs,
    isFetching,
    handleChange,
    handleSearch,
  };

  return (
    <StateContext.Provider value={contextValue}>
      {props.children}
    </StateContext.Provider>
  );
};

export default StateContext;
