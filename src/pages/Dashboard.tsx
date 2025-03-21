import { SetStateAction, useEffect, useRef, useState } from "react";
import ProfileCard2 from "./ProfileCard2";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
  selectDashboardData,
  selectResultData,
  filterDashbaordData,
  selectDasboardActivePage,
  setDasboardActivePage,
} from "../reducers/slice/profilesSlice";
import { Profile } from "../models/profile.model";

const Dashboard = () => {
  const dispatch = useAppDispatch();

  const [activeTab, setActiveTab] = useState(
    useAppSelector(selectDasboardActivePage)
  );
  const activeRef = useRef("");

  const resultData = useAppSelector(selectResultData);
  const dataProvider = useAppSelector(selectDashboardData);
  const listItems = dataProvider.map((vo: Profile) => (
    <ProfileCard2 vo={vo} key={vo.basic.display_name + vo.basic.username} />
  ));

  function applyFilter() {
    const a1 = resultData.filter(
      (p: Profile) => p.connect.status === activeRef.current
    );
    dispatch(filterDashbaordData(a1));
  }

  function handleClick(string: any) {
    activeRef.current = string;
    applyFilter();
    setActiveTab(string);
    dispatch(setDasboardActivePage(string));
  }

  useEffect(() => {
    activeRef.current = activeTab;
    applyFilter();
    //setActiveTab("Recieved");
    return () => {};
  }, []);

  return (
    <div className="col-md-12">
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <button
            onClick={(e) => handleClick("Sent")}
            className={activeTab === "Sent" ? "nav-link active" : "nav-link"}
            aria-current="page"
          >
            Sent
          </button>
        </li>
        <li className="nav-item">
          <button
            onClick={(e) => handleClick("Recieved")}
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
            onClick={(e) => handleClick("Accepted")}
          >
            Accepted
          </button>
        </li>
        <li className="nav-item">
          <button
            className={
              activeTab === "Declined" ? "nav-link active" : "nav-link"
            }
            onClick={(e) => handleClick("Declined")}
          >
            Declined
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
