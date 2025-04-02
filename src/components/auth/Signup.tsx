import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import React, { useState } from "react";
import { Link } from "react-router";

const Signup = () => {
  const auth = getAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isError, setIsError] = useState(false);
  const [isFailure, setIsFailure] = useState(false);
  const [failureMsg, setFailureMsg] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [showBusy, setShowBusy] = useState(false);

  function signup() {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        setIsSuccess(true);
        setIsFailure(false);
        setShowBusy(false);
        // ...
      })
      .catch((error) => {
        setIsFailure(true);
        setIsSuccess(false);
        setFailureMsg(error.code);
        console.log("Error: ", error.code, error.message);
        setShowBusy(false);
      });
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (password === confirmPassword) {
      setShowBusy(true);
      signup();
    } else {
      setIsFailure(true);
    }
    //
  }

  return (
    <main className="form-signin m-auto my-5" style={{ width: 400 }}>
      <form onSubmit={handleSubmit} xvpn-watching-form="true">
        <h1 className="h3 mb-3 fw-normal">Signup</h1>
        <div className={isError ? "alert alert-danger" : "d-none"} role="alert">
          Password do not match
        </div>
        <div
          className={isFailure ? "alert alert-danger" : "d-none"}
          role="alert"
        >
          Error! {failureMsg}
        </div>
        <div
          className={isSuccess ? "alert alert-success" : "d-none"}
          role="alert"
        >
          Success
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingInputFullname"
            placeholder="Full Name"
            required={true}
            onChange={(e) => setDisplayName(e.target.value)}
          />
          <label htmlFor="floatingInputFullname">Fullname</label>
        </div>

        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="floatingInputEmail"
            placeholder="name@example.com"
            xvpn-watching="true"
            xvpn-input-type="login-username"
            required={true}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="floatingInputEmail">Email address</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingInputPhoneNumber"
            placeholder=""
            xvpn-watching="true"
            xvpn-input-type="login-username"
            required={true}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <label htmlFor="floatingInputPhoneNumber">Phone number</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
            xvpn-watching="true"
            xvpn-input-type="login-password"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
            title="Must contain at least one number and one uppercase and lowercase letter, and at least 6 or more characters"
            required={true}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <div className="form-floating mb-2">
          <input
            type="password"
            className="form-control"
            id="floatingPassword2"
            placeholder="Password"
            xvpn-watching="true"
            xvpn-input-type="login-password"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
            title="Must contain at least one number and one uppercase and lowercase letter, and at least 6 or more characters"
            required={true}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <label htmlFor="floatingPassword2">Confirm Password</label>
        </div>
        <div className="form-check text-start my-3">
          <input
            className="form-check-input"
            type="checkbox"
            defaultValue="remember-me"
            id="flexCheckDefault"
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            By signing up you agree to our <a href="#">Terms and conditions</a>{" "}
            and
            <a href="#" className="ps-1">
              Privacy policy
            </a>
            .
          </label>
        </div>
        <button
          disabled={showBusy}
          className="btn btn-primary w-100 my-3"
          type="submit"
        >
          Signup
        </button>

        <p className="mt-4 mb-4 mb-3 text-body-secondary">
          Already have an account?
          <Link to="/" className="ps-2">
            Sign In
          </Link>
        </p>
      </form>
    </main>
  );
};

export default Signup;
