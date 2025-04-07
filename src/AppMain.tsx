import { BrowserRouter, Route, Routes } from "react-router";
import Dashboard from "./pages/Dashboard";
import ProfileDetailsPage from "./pages/ProfileDetailsPage";
import ProfileListPage from "./pages/ProfileListPage";
import Signup from "./components/auth/Signup";
import Register from "./pages/register/Register";
import SignIn from "./components/auth/SignIn";
import ResetPassword from "./components/auth/ResetPassword";

const AppMain = () => {
  return (
    <main className="row">
      <BrowserRouter>
        <Routes>
          <Route index element={<SignIn />} />
          <Route path="signup" element={<Signup />} />
          <Route path="reset" element={<ResetPassword />} />
          <Route path="register" element={<Register />} />

          <Route path="profiles" element={<ProfileListPage />} />
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

export default AppMain;
