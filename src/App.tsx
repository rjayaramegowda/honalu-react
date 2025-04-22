import React from "react";
import AppMain from "./AppMain";
import { useProfilesQuery } from "./reducers/api/profilesApi";

const App = () => {
  const { data, error, isLoading, isFetching, isSuccess } = useProfilesQuery();

  const showView = isSuccess ? <AppMain /> : <h1>Loading</h1>;
  return <>{showView}</>;
};

export default App;
