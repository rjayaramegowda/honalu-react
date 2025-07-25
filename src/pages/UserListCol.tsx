import React from "react";
import PropTypes from "prop-types";
import ProfileCard from "./ProfileCard";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { selectFilteredData } from "../reducers/slice/profilesSlice";
import { Profile } from "../models/profile.model";

UserListCol.propTypes = {};

function UserListCol() {
  const dataProvider = useAppSelector(selectFilteredData);
  const listItems = dataProvider.map((vo: Profile) => (
    <ProfileCard
      vo={vo}
      key={vo.basic.display_name + vo.basic.username + vo.id}
    />
  ));

  return (
    <div className="col-md-9">
      <div className={listItems.length > 0 ? "row g-3" : "d-none"}>
        {listItems}
      </div>
      <p className={listItems.length === 0 ? "p-5" : "d-none"}>
        No profile found!
      </p>
    </div>
  );
}

export default UserListCol;
