import { BrowserRouter, Route, Routes } from "react-router";
import Dashboard from "./pages/Dashboard";
import { FilterList } from "./pages/FilterList";
import ProfileDetailsPage from "./pages/ProfileDetailsPage";
import ProfileListPage from "./pages/ProfileListPage";
import UserListCol from "./pages/UserListCol";

const App = () => {
  return (
    <main className="row">
      <BrowserRouter>
        <Routes>
          <Route index element={<ProfileListPage />} />
          <Route path="details" element={<ProfileDetailsPage />} />
          <Route path="dashboard" element={<Dashboard />} />

          {/* <Route element={<AuthLayout />}>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>

          <Route path="concerts">
            <Route index element={<ConcertsHome />} />
            <Route path=":city" element={<City />} />
            <Route path="trending" element={<Trending />} />
          </Route> */}
        </Routes>
      </BrowserRouter>
    </main>
  );
};

export default App;
