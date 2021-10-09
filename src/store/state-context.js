import React, { useState } from "react";
import Loader from "./../components/reusable/Loader";

import axios from "axios";
import ErrorPage from "../pages/ErrorPage";

const StateContext = React.createContext(null);

export const StateContextProvider = (props) => {
  const [username, setUsername] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [repos, setRepos] = useState([]);
  const [orgs, setOrgs] = useState([]);
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  const BASE_URL = "https://api.github.com";

  const handleSearch = async () => {
    setLoading(true);
    const repos = axios.get(`${BASE_URL}/users/${username}/repos?per_page=250`);
    const user = axios.get(`${BASE_URL}/users/${username}`);
    const orgs = axios.get(`${BASE_URL}/users/${username}/orgs`);

    await axios
      .all([repos, user, orgs])
      .then(
        axios.spread(function (repo, user, orgs) {
          setRepos(repo.data);
          setUser(user.data);
          setOrgs(orgs.data);
          setDisabled(false);

          // console.log("repo response", repo);
          // console.log("orgs response", orgs);
          // console.log("user response", user);
        })
      )
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  if (loading) return <Loader />;
  if (error) return <ErrorPage />;

  console.log("repositories response", repos);
  console.log("orgs response", orgs);
  // console.log("git user", user);

  const contextValue = {
    username,
    disabled,
    repos,
    orgs,
    user,
    loading,
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
