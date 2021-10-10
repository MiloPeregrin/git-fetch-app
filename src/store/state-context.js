import React, { useState } from "react";
import Loader from "./../components/reusable/Loader";

import axios from "axios";
import ErrorPage from "../pages/ErrorPage";

const StateContext = React.createContext(null);

export const StateContextProvider = (props) => {
  const [username, setUsername] = useState("");
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
    //define URL we want to load from
    const repo_url = axios.get(
      `${BASE_URL}/users/${username}/repos?per_page=250`
    );
    const user_url = axios.get(`${BASE_URL}/users/${username}`);
    const orgs_url = axios.get(`${BASE_URL}/users/${username}/orgs`);

    await axios
      //get request on the URL => unresolved promise
      .all([repo_url, user_url, orgs_url])
      .then(
        axios.spread(function (repo_res, user_res, orgs_res) {
          setRepos(repo_res.data);
          setUser(user_res.data);
          setOrgs(orgs_res.data);

          // console.log("repo_res", repo_res);
          // console.log("orgs_res", orgs_res);

          console.log("repo_res.data ", repo_res.data);
          console.log("orgs_res.data", orgs_res.data);

          console.log("repos state", repos);
          console.log("orgs state", orgs);
        })
      )
      //POKRACOVANI - DRUHY CALL  .THEN?
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setError(error);
      })
      .finally(() => {
        setDisabled(false);
        setLoading(false);
      });
  };
  // console.log("repos state", repos);
  // console.log("orgs state", orgs);

  if (loading) return <Loader />;
  if (error) return <ErrorPage />;

  // console.log("repositories response", repos);
  // console.log("orgs response", orgs);
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
