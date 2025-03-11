import React, { useState } from "react";
import PropTypes, { string } from "prop-types";
import { Profile } from "../models/profile.model";
import ProfileDetailsLeftCol from "./ProfileDetailsLeftCol";
import ProfileDetailsRightCol from "./ProfileDetailsRightCol";
import { useAppSelector } from "../app/hooks";
import { selectDataProvider } from "../features/counter/counterSlice";

export const ProfileDetailsPage = () => {
  const dataProvider = useAppSelector(selectDataProvider);

  return (
    <>
      <div className="col-md-3 mb-3 mt-1">
        <ProfileDetailsLeftCol vo={dataProvider[0]} />
      </div>
      <div className="col-md-9">
        <ProfileDetailsRightCol vo={dataProvider[0]} />
      </div>
    </>
  );
};

export default ProfileDetailsPage;
