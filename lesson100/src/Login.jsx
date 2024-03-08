// eslint-disable-next-line no-unused-vars
import React from "react";

function Login() {
  return (
    <>
      <h1>Login</h1>
      <form>
        <div>
          <label htmlFor="email">Email</label>
            <div></div>
          <input type="email" id="email" name="email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
            <div></div>
          <input type="password" id="password" name="password" />
        </div>
        <button type="submit">Login</button>
      </form>
    </>
  );
}

export default Login;
