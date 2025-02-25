import { FilterList } from "./pages/FilterList";
import UserListCol from "./pages/UserListCol";

const App = () => {
  return (
    <div className="row">
      <FilterList />
      <UserListCol />
    </div>
  );
};

export default App;
