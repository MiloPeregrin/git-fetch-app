// import React, { useState, useEffect } from "react";
// import axios from "axios";

// import Loader from "../Loader";

// const BASE_URL = "https://api.github.com";

// // export default function getRepos() {
// //   const [data, setData] = useState(null);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);

// //   useEffect(() => {
// //     getData();
// //   }, []);

// //   async function getData() {
// //     await axios(`${BASE_URL}/users/${username}/repos?per_page=250`)
// //       .then((response) => {
// //         setData(response.data);
// //       })
// //       .catch((error) => {
// //         console.error("Error fetching data: ", error);
// //         setError(error);
// //       })
// //       .finally(() => {
// //         setLoading(false);
// //       });
// //   }
// //   if (loading) return <Loader />;
// //   if (error) return "Error!";

// //   return data;
// // }
