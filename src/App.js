import React from "react";
import { Route, Switch } from "react-router-dom";
import { StateContextProvider } from "./store/state-context";

import Layout from "./components/layout/Layout";
import Homepage from "./pages/Homepage";
import Repositories from "./pages/Repositories";
import Organisations from "./pages/Organisations";

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
            <Route path="/organisations">
              <Organisations />
            </Route>
          </Switch>
        </Layout>
      </StateContextProvider>
    </>
  );
};

export default App;
