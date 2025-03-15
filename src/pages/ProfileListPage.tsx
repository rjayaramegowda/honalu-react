import React from "react";
import { FilterList } from "./FilterList";
import UserListCol from "./UserListCol";
import FilterListSM from "./FilterListSM";

const ProfileListPage = () => {
  return (
    <>
      <FilterListSM />
      <div className="col-md-3 mb-3 bg-light p-3 d-none d-md-block">
        <FilterList />
      </div>

      <UserListCol />
    </>
  );
};

export default ProfileListPage;
