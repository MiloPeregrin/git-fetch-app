import React from "react";
import { Route, Switch } from "react-router-dom";
import { StateContextProvider } from "./store/state-context";

import Layout from "./components/layout/Layout";
import Homepage from "./pages/Homepage";
import Repositories from "./pages/Repositories";
import Organizations from "./pages/Organizations";

const App = () => {
  return (
    <>
      <StateContextProvider>
        <Layout>
          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>
            <Route path="/repositories">
              <Repositories />
            </Route>
            <Route path="/organizations">
              <Organizations />
            </Route>
          </Switch>
        </Layout>
      </StateContextProvider>
    </>
  );
};

export default App;
