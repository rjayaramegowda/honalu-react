import React from "react";
import { FilterList } from "./FilterList";
import UserListCol from "./UserListCol";
import FilterListSM from "./FilterListSM";
import { useFiltersQuery, useProfilesQuery } from "../reducers/api/profilesApi";

const ProfileListPage = () => {
  const { data, error, isLoading, isFetching, isSuccess } = useFiltersQuery();
  const showView = isSuccess ? <FilterList vo={data} /> : <h1>Loading</h1>;
  const showViewSM = isSuccess ? <FilterListSM vo={data} /> : <h1>Loading</h1>;

  return (
    <>
      {showViewSM}
      <div className="col-md-3 mb-3 bg-light p-3 d-none d-md-block">
        {showView}
      </div>

      <UserListCol />
    </>
  );
};

export default ProfileListPage;
