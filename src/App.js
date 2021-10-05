import React from "react";
import classes from "./App.module.css";

import UserInput from "./components/UserInput";
import DataList from "./components/DataList";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <div className={classes.container}>
        <UserInput />
        <Navbar />
        <DataList />
      </div>
    </>
  );
};

export default App;
