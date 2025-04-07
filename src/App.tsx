import React from "react";
import AppMain from "./AppMain";
import { useProfilesQuery } from "./reducers/api/profilesApi";
import Register from "./pages/register/Register";

const App = () => {
  return (
    <main className="row">
      <Register />
    </main>
  );
};

export default App;
