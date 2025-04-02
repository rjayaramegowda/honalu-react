import React, { useState } from "react";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

const ResetPassword = () => {
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [email, setEmail] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const auth = getAuth();
    sendPasswordResetEmail(auth, email)
      .then(() => {
        // Password reset email sent!
        // ..
        setIsSuccess(true);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        setIsError(true);
        // ..
      });
  }

  return (
    <main className="form-signin m-auto mt-5" style={{ width: 350 }}>
      <form onSubmit={(e) => handleSubmit(e)} xvpn-watching-form="true">
        <h1 className="h3 mb-3 fw-normal">Reset Password</h1>
        <div
          className={isSuccess ? "alert alert-success" : "d-none"}
          role="alert"
        >
          Reset link is send to your email.
        </div>
        <div className={isError ? "alert alert-danger" : "d-none"} role="alert">
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

        <button className="btn btn-primary w-100 my-3" type="submit">
          Reset
        </button>
      </form>
    </main>
  );
};

export default ResetPassword;
