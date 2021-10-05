import React from "react";
import classes from "./App.module.css";

import UserInput from "./components/UserInput";
import DataList from "./components/DataList";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <UserInput />
      <div className={classes.container}>
        <Navbar />
        <DataList />
      </div>
    </>
  );
};

export default App;
