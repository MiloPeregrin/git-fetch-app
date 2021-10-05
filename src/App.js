import React from "react";
import { Switch, Route, Link } from "react-router-dom";

import UserInput from "./components/UserInput";
import RepoButton from "./components/RepoButton";
import OrgButton from "./components/OrgButton";
import DataTable from "./components/DataTable";

const App = () => {
  return (
    <div className="app-container">
      <UserInput />
      <RepoButton />
      <OrgButton />
      <DataTable />
    </div>
  );
};

export default App;
