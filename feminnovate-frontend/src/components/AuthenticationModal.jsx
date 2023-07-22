import { useState } from "react";
import logo from "../assets/logo.svg";
import hide from "../assets/hide.png";
import show from "../assets/show.png";
import close from "../assets/close.png";
import styles from "../style";

const CloseButton = ({ onClick }) => {
  return (
    <button
      className="w-3 sm:w-4 h-3 sm:h-4 m-auto -mt-3 -mr-4"
      onClick={onClick}
    >
      <img src={close} />
    </button>
  );
};

const LogoWithTagline = () => {
  return (
    <div className="flex flex-col w-[100%] items-center mb-9">
      <img className="w-[75%]" src={logo} />
      <div className={`${styles.subheading5} -mt-1`}>
        Building Careers For Women
      </div>
    </div>
  );
};

const Input = ({ label, id, name, type, value, onChange }) => {
  return (
    <div className="flex flex-col w-[100%] items-left mb-5">
      <label
        htmlFor={id}
        className={`${styles.subheading5} -mt-1 text-black/50 w-full ml-1`}
      >
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        className="border border-grey rounded-md w-full h-14 px-3 py-2"
      ></input>
    </div>
  );
};

const PasswordInput = ({
  label,
  id,
  name,
  type,
  value,
  onChange,
  onClick,
  showInput,
}) => {
  return (
    <div className="flex flex-col w-[100%] items-left">
      <label
        htmlFor={id}
        className={`${styles.subheading5} -mt-1 text-black/50 w-full ml-1`}
      >
        {label}
      </label>
      <div className="flex justify-center items-center mb-5 relative">
        <input
          id={id}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          className="border border-grey rounded-md w-full h-14 pl-3 pr-12 py-2"
        ></input>
        <button
          className="absolute right-0 ml-1 mr-3 px-1 items-center"
          onClick={onClick}
        >
          {showInput ? (
            <img className="w-6" src={hide} />
          ) : (
            <img className="w-6" src={show} />
          )}
        </button>
      </div>
    </div>
  );
};

const SwitchMessage = ({ question, hypertext, onClick }) => {
  return (
    <div>
      {question}{" "}
      <a
        className="text-blue underline underline-offset-2"
        href="#"
        onClick={onClick}
      >
        {hypertext}
      </a>
    </div>
  );
};

const AuthenticationModal = ({
  openSignUpModal,
  openLogInModal,
  handleOpenSignUpModal,
  handleOpenLogInModal,
  handleCloseModal,
}) => {
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

  const resetFormValues = () => {
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setShowPassword(false);
    setShowConfirmPassword(false);
  };

  const handleSwitchToLogIn = () => {
    resetFormValues();
    handleOpenLogInModal();
  };

  const handleSwitchToSignUp = () => {
    resetFormValues();
    handleOpenSignUpModal();
  };

  return (
    <div className="flex flex-col w-full h-full bg-white rounded-3xl p-10 items-center justify-around">
      <div className="flex w-full h-full">
        <CloseButton onClick={handleCloseModal}></CloseButton>
      </div>
      <LogoWithTagline></LogoWithTagline>
      <Input
        label="Email"
        id="email"
        name="email"
        type="email"
        value={email}
        onChange={handleEmailChange}
      ></Input>
      <PasswordInput
        label="Password"
        id="password"
        name="password"
        type={showPassword ? "text" : "password"}
        value={password}
        onChange={handlePasswordChange}
        onClick={togglePassword}
        showInput={showPassword ? 1 : 0}
      ></PasswordInput>
      {openSignUpModal && (
        <PasswordInput
          label="Confirm Password"
          id="confirmPassword"
          name="confirmPassword"
          type={showConfirmPassword ? "text" : "password"}
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          onClick={toggleConfirmPassword}
          showInput={showConfirmPassword ? 1 : 0}
        ></PasswordInput>
      )}
      <button
        className={`${styles.subheading4} bg-purple w-full px-12 py-3 my-5 border border-black rounded-full`}
        type="button"
      >
        {openSignUpModal ? "Sign Up" : "Log In"}
      </button>
      <div className={`${styles.paragraph1}`}>
        {openSignUpModal ? (
          <SwitchMessage
            question="Have an account?"
            hypertext="Sign up here."
            onClick={handleSwitchToLogIn}
          />
        ) : (
          <SwitchMessage
            question="Don't have an account?"
            hypertext="Login here."
            onClick={handleSwitchToSignUp}
          />
        )}
      </div>
    </div>
  );
};

export default AuthenticationModal;
