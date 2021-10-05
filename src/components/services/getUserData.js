import React, { useState, useEffect } from "react";
import axios from "axios";

import Loader from "../Loader";

const BASE_URL = "https://api.github.com";

export default function getUserData() {
  const [user, setUser] = useState(null);
  const [orgs, setOrgs] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    await axios
      .all([
        axios.get(`${BASE_URL}/users/${username}`),
        axios.get(`${BASE_URL}/users/${username}/orgs`),
      ])
      .then(([user, orgs]) => {
        setUser(user.data);
        setOrgs(orgs.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }
  if (loading) return <Loader />;
  if (error) return "Error!";

  return [user, orgs];
}
