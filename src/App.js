import React from "react";
import { Route, Switch } from "react-router-dom";
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
          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>
            <Route path="/repositories">
              <Repositories />
            </Route>
            <Route path="/organisations">
              <Organisations />
            </Route>
          </Switch>
        </main>
      </div>
    </>
  );
};

export default App;
