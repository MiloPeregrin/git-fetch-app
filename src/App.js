import React from "react";
import { Route, Switch } from "react-router-dom";
import { StateContextProvider } from "./store/state-context";

import Layout from "./components/layout/Layout";
import Homepage from "./pages/Homepage";
import Repositories from "./pages/Repositories";
import Organisations from "./pages/Organisations";
import classes from "./App.module.css";

const App = () => {
  return (
    <>
      <StateContextProvider>
        <Layout>
          <div className={classes.container}>
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
          </div>
        </Layout>
      </StateContextProvider>
    </>
  );
};

export default App;
