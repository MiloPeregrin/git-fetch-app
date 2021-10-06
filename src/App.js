import React from "react";
import { Route } from "react-router-dom";
import classes from "./App.module.css";

import Homepage from "./pages/Homepage";
import Repositories from "./pages/Repositories";
import Organisations from "./pages/Organisations";
import UserInput from "./components/UserInput";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <div className={classes.container}>
        <header>
          <UserInput />
          <Navbar />
        </header>
        <main className={classes.main}>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route path="/repositories">
            <Repositories />
          </Route>
          <Route path="/organisations">
            <Organisations />
          </Route>
        </main>
      </div>
    </>
  );
};

export default App;
