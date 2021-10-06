import React from "react";
import { Route } from "react-router-dom";
import classes from "./App.module.css";

import MainHeader from "./components/mainHeader/MainHeader";
import Homepage from "./pages/Homepage";
import Repositories from "./pages/Repositories";
import Organisations from "./pages/Organisations";

const App = () => {
  return (
    <>
      <div className={classes.container}>
        <header>
          <MainHeader />
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
