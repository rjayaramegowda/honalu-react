import React from "react";
import PropTypes from "prop-types";
import ProfileCard from "./ProfileCard";

UserListCol.propTypes = {};

function UserListCol() {
  return (
    <div className="col-md-9">
      <div className="row g-3">
        <ProfileCard />
      </div>
    </div>
  );
}

export default UserListCol;
