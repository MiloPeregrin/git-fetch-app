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
  const [orgsUrl, setOrgsUrl] = useState([]);
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSearch = () => {
    const BASE_URL = "https://api.github.com";
    setLoading(true);

    const getData = async () => {
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
            //what to do with response data
            setRepos(repo_res.data);
            setUser(user_res.data);
            setOrgs(orgs_res.data);
          })
        )
        .catch((error) => {
          console.error("Error fetching data: ", error);
          setError(error);
        });
    };

    const mappedOrgs = orgs.map((item) => item.url);
    console.log(mappedOrgs);

    const getOrgsUrl = async () => {
      await axios
        .all(mappedOrgs.map((l) => axios.get(l)))
        .then(
          axios.spread(function (...res) {
            // all requests are now complete
            let all = res.map((item) => item.data);
            setOrgsUrl(all);
            console.log(all);
          })
        )
        .catch((error) => {
          console.error("Error fetching data: ", error);
          setError(error);
        });
    };

    getData();
    getOrgsUrl();

    setDisabled(false);
    setLoading(false);
  };

  if (loading) return <Loader />;
  if (error) return <ErrorPage />;

  const contextValue = {
    username,
    disabled,
    repos,
    orgs,
    orgsUrl,
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
