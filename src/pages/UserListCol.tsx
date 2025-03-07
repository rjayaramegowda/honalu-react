import React from "react";
import PropTypes from "prop-types";
import ProfileCard from "./ProfileCard";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { selectDataProvider } from "../features/counter/counterSlice";
import { Profile } from "../models/profile.model";

UserListCol.propTypes = {};

function UserListCol() {
  const dataProvider = useAppSelector(selectDataProvider);
  const listItems = dataProvider.map((vo: Profile) => (
    <ProfileCard vo={vo} key={vo.basic.display_name + vo.basic.username} />
  ));

  return (
    <div className="col-md-9">
      <div className="row g-3">{listItems}</div>
    </div>
  );
}

export default UserListCol;
