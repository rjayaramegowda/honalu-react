import React from "react";
import { useNavigate } from "react-router";

const Register = () => {
  let navigate = useNavigate();

  return (
    <div>
      <h1>Register</h1>
      <button
        className="btn btn-outline-success"
        onClick={() => {
          navigate("sss");
        }}
      >
        Click Me
      </button>
    </div>
  );
};

export default Register;
