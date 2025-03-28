import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Authuser } from "../../models/authuser.model";

const SignIn = () => {
  //SignIn
  const auth = getAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isFailure, setIsFailure] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [authUser, setAuthUser] = useState<Authuser | null>();

  function login(email: string, password: string) {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setAuthUser(Object.assign(user));
        setIsSuccess(true);
        //setAuthUser(user);
        // ...
        return user;
      })
      .catch((error) => {
        setIsFailure(true);
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);

        return error;
      });
    setIsLoading(false);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsFailure(false);
    setIsLoading(true);
    login(email, password);
  }

  return (
    <main className="form-signin m-auto mt-5" style={{ width: 350 }}>
      <form onSubmit={(e) => handleSubmit(e)} xvpn-watching-form="true">
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
        <div
          className={
            isLoading ? "d-flex justify-content-center my-4" : "d-none"
          }
        >
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
        <div
          className={isSuccess ? "alert alert-success" : "d-none"}
          role="alert"
        >
          Success {authUser?.email}
        </div>
        <div
          className={isFailure ? "alert alert-danger" : "d-none"}
          role="alert"
        >
          Error: Invalid credential (Failure).
        </div>
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control fltext"
            id="floatingInput"
            placeholder="name@example.com"
            xvpn-watching="true"
            xvpn-input-type="login-username"
            required={true}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="floatingInput">Email address</label>
          <div data-test="floatingInput" className="xv-pwm-icon"></div>
        </div>
        <div className="form-floating mb-2">
          <input
            type="password"
            className="form-control fltext"
            id="floatingPassword"
            placeholder="Password"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
            title="Must contain at least one number and one uppercase and lowercase letter, and at least 6 or more characters"
            required={true}
            xvpn-watching="true"
            xvpn-input-type="login-password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="floatingPassword">Password</label>
          <div data-test="floatingPassword" className="xv-pwm-icon"></div>
        </div>

        <button className="btn btn-primary w-100 my-3" type="submit">
          Sign in
        </button>

        <p className="mt-3 mb-3 text-body-secondary">
          Don't have an account? <a href="./signup.html"> signup now</a>
        </p>

        <p className="mt-3 mb-5 text-body-secondary">
          Forgot your password? <a href="./signup.html"> Reset password</a>
        </p>
      </form>
    </main>
  );
};

export default SignIn;
