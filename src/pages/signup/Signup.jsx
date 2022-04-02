import React from "react";
import { Link } from "react-router-dom";
import { InputField } from "../../components/InputField";
import "../../stylesheets/login-signup.css";

function Signup() {
  return (
    <div className="pattern-bg p-4">
      <div className="login-signup-form my-4 p-4 w-80p border-5">
        <h3 className="text-md font-semibold login-signup-heading">Sign Up</h3>
        <form className="mx-auto my-8">
          <InputField
            type="email"
            inputId="email"
            name="Email-id:"
            placeholder="jhon@gmail.com"
          />
          <InputField
            type="text"
            inputId="name"
            name="Name:"
            placeholder="Jhon Doe"
          />
          <InputField
            type="password"
            inputId="password"
            name="Password:"
            placeholder="********"
          />
          <InputField
            type="password"
            inputId="cpassword"
            name="Confirm Password:"
            placeholder="********"
          />
          <button className="btn btn-primary">Sign Up</button>
        </form>
        <p>
          Already have an account ?{" "}
          <Link className="move-text" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export { Signup };
