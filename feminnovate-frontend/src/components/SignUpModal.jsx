import { useState } from "react";
import logo from "../assets/logo.svg";
import styles from "../style";

const SignUpModal = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  return (
    <div className="flex flex-col w-full h-full bg-white rounded-3xl p-10 items-center justify-around">
      <div className="flex flex-col w-[100%] items-center">
        <img className="w-[75%]" src={logo} />
        <div className={`${styles.subheading5} -mt-1 mb-9`}>
          Building Careers For Women
        </div>
      </div>
      <div className="flex flex-col w-[100%] items-left">
        <div
          className={`${styles.subheading5} -mt-1 text-black/50 w-full ml-1`}
        >
          Email
        </div>
        <input
          name="email"
          type="email"
          value={email}
          onChange={handleEmailChange}
          className="border border-grey rounded-md w-full h-14 mb-5 px-3 py-2"
        ></input>
      </div>
      <div className="flex flex-col w-[100%] items-left">
        <div
          className={`${styles.subheading5} -mt-1 text-black/50 w-full ml-1`}
        >
          Password
        </div>
        <input
          name="password"
          type="password"
          value={password}
          onChange={handlePasswordChange}
          className="border border-grey rounded-md w-full h-14 mb-5 px-3 py-2"
        ></input>
      </div>
      <div className="flex flex-col w-[100%] items-left">
        <div
          className={`${styles.subheading5} -mt-1 text-black/50 text-left w-full ml-1`}
        >
          Confirm Password
        </div>
        <input
          name="confirmPassword"
          type="password"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          className="border border-grey rounded-md w-full h-14 mb-5 px-3 py-2"
        ></input>
      </div>
      <button
        className={`${styles.subheading4} bg-purple w-full px-12 py-3 my-5 border border-black rounded-full`}
        type="button"
      >
        Sign Up
      </button>
      <div className={`${styles.paragraph1}`}>
        Have an account?{" "}
        <a href="#" className="text-blue underline underline-offset-2">
          Login here.
        </a>
      </div>
    </div>
  );
};

export default SignUpModal;
