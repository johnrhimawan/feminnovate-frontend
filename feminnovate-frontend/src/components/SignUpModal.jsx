import { useState } from "react";
import logo from "../assets/logo.svg";
import hide from "../assets/hide.png";
import show from "../assets/show.png";
import close from "../assets/close.png";
import styles from "../style";

const SignUpModal = ({
  openSignUpModal,
  openLogInModal,
  handleOpenSignUpModal,
  handleOpenLogInModal,
  handleCloseModal,
}) => {
  console.log(openSignUpModal);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="flex flex-col w-full h-full bg-white rounded-3xl p-10 items-center justify-around">
      <div className="flex w-full h-full">
        <button
          className="w-3 sm:w-4 h-3 sm:h-4 m-auto -mt-3 -mr-4"
          onClick={handleCloseModal}
        >
          <img src={close} />
        </button>
      </div>
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
        <div className="flex justify-center items-center mb-5 relative">
          <input
            name="password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={handlePasswordChange}
            className="border border-grey rounded-md w-full h-14 pl-3 pr-12 py-2"
          ></input>
          <button
            className="absolute right-0 ml-1 mr-3 px-1 items-center"
            onClick={togglePassword}
          >
            {showPassword ? (
              <img className="w-6" src={hide} />
            ) : (
              <img className="w-6" src={show} />
            )}
          </button>
        </div>
      </div>
      {openSignUpModal && (
        <div className="flex flex-col w-[100%] items-left">
          <div
            className={`${styles.subheading5} -mt-1 text-black/50 text-left w-full ml-1`}
          >
            Confirm Password
          </div>
          <div className="flex justify-center items-center mb-5 relative">
            <input
              name="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              className="border border-grey rounded-md w-full h-14 pl-3 pr-12 py-2"
            ></input>
            <button
              className="absolute right-0 ml-1 mr-3 px-1 items-center"
              onClick={toggleConfirmPassword}
            >
              {showConfirmPassword ? (
                <img className="w-6" src={hide} />
              ) : (
                <img className="w-6" src={show} />
              )}
            </button>
          </div>
        </div>
      )}
      <button
        className={`${styles.subheading4} bg-purple w-full px-12 py-3 my-5 border border-black rounded-full`}
        type="button"
      >
        {openSignUpModal ? "Sign Up" : "Log In"}
      </button>
      <div className={`${styles.paragraph1}`}>
        {openSignUpModal ? (
          <div>
            Have an account?{" "}
            <a
              className="text-blue underline underline-offset-2"
              href="#"
              onClick={handleOpenLogInModal}
            >
              Login here.
            </a>
          </div>
        ) : (
          <div>
            Don't have an account?{" "}
            <a
              className="text-blue underline underline-offset-2"
              href="#"
              onClick={handleOpenSignUpModal}
            >
              Sign up here.
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default SignUpModal;
