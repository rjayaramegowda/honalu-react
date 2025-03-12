import { useState } from "react";
import ProfileCard2 from "./ProfileCard2";
import { useAppSelector } from "../app/hooks";
import { selectDataProvider } from "../features/counter/counterSlice";
import { Profile } from "../models/profile.model";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("Sent");

  const dataProvider = useAppSelector(selectDataProvider);
  const listItems = dataProvider.map((vo: Profile) => (
    <ProfileCard2 vo={vo} key={vo.basic.display_name + vo.basic.username} />
  ));

  return (
    <div className="col-md-12">
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <button
            onClick={(e) => setActiveTab("Sent")}
            className={activeTab === "Sent" ? "nav-link active" : "nav-link"}
            aria-current="page"
          >
            Sent
          </button>
        </li>
        <li className="nav-item">
          <button
            onClick={(e) => setActiveTab("Recieved")}
            className={
              activeTab === "Recieved" ? "nav-link active" : "nav-link"
            }
          >
            Recieved
          </button>
        </li>
        <li className="nav-item">
          <button
            className={
              activeTab === "Accepted" ? "nav-link active" : "nav-link"
            }
            onClick={(e) => setActiveTab("Accepted")}
          >
            Accepted
          </button>
        </li>
        <li className="nav-item">
          <button
            className={activeTab === "Deleted" ? "nav-link active" : "nav-link"}
            onClick={(e) => setActiveTab("Deleted")}
          >
            Deleted
          </button>
        </li>
      </ul>
      <div className="border p-3 mb-5" style={{ marginTop: "-1px" }}>
        <h4 className="py-3">{activeTab} Request</h4>
        {listItems}
      </div>
    </div>
  );
};

Dashboard.propTypes = {};

export default Dashboard;
