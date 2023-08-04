import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";
import hide from "../assets/hide.png";
import show from "../assets/show.png";
import close from "../assets/close.png";
import styles from "../style";
import axios from "axios";
import { API_URL } from "../constants";

const onKeyDown = (event) => {
  if (event.keyCode === 13) event.preventDefault();
};

const CloseButton = ({ onClick }) => {
  return (
    <button className="w-3 sm:w-4 h-3 sm:h-4 m-auto -mr-1" onClick={onClick}>
      <img src={close} />
    </button>
  );
};

const LogoWithTagline = () => {
  return (
    <div className="flex flex-col w-[100%] items-center mb-7">
      <img className="w-[70%]" src={logo} />
      <div className={`${styles.subheading5} -mt-1`}>
        Building Careers For Women
      </div>
    </div>
  );
};

const Input = ({ label, id, name, type, value, onChange }) => {
  return (
    <div className="flex flex-col w-[100%] items-left mb-4">
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
        onKeyDown={onKeyDown}
        className="border border-grey rounded-md w-full h-12 px-3 py-2"
        required
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
      <div className="flex justify-center items-center mb-4 relative">
        <input
          id={id}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          onKeyDown={onKeyDown}
          className="border border-grey rounded-md w-full h-12 pl-3 pr-12 py-2"
          required
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
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  const [signUpSuccessfulMessage, setSignUpSuccessfulMessage] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    validatePasswords(event.target.value, confirmPassword);
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    validatePasswords(password, event.target.value);
    setConfirmPassword(event.target.value);
  };

  const validatePasswords = (password, confirmPassword) => {
    setErrorMessage("");
    if (password != "" && confirmPassword != "") {
      if (password != confirmPassword) {
        setErrorMessage("Password and Confirm Password doesn't match");
      } else if (password.length < 8) {
        setErrorMessage("Password must have at least 8 characters");
      }
    }
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const resetFormValues = () => {
    setName("");
    setUsername("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setShowPassword(false);
    setShowConfirmPassword(false);
    setErrorMessage("");
    setSignUpSuccessfulMessage("");
  };

  const handleSwitchToLogIn = () => {
    resetFormValues();
    handleOpenLogInModal();
  };

  const handleSwitchToSignUp = () => {
    resetFormValues();
    handleOpenSignUpModal();
  };

  const handleSubmitSignUp = async (event) => {
    event.preventDefault();

    await axios
      .post(`${API_URL}api/auth/register/`, {
        name: name,
        username: username,
        email: email,
        password: password,
      })
      .then((resp) => {
        console.log("resp", resp.data);
        resetFormValues();
        handleOpenLogInModal();
        setSignUpSuccessfulMessage(
          "Account registered successfully. Please login."
        );
      })
      .catch((error) => {
        console.log(error.response.data);
        setErrorMessage(error.response.data.detail);
      });
  };

  const handleSubmitLogIn = async (event) => {
    event.preventDefault();

    await axios
      .post(`${API_URL}api/auth/login/`, {
        username: username,
        password: password,
      })
      .then((resp) => {
        console.log("resp", resp.data);
        localStorage.clear();
        localStorage.setItem("token", resp.data.access);
        navigate("/jobs");
      })
      .catch((error) => {
        console.log(error.response.data);
        setErrorMessage(error.response.data.detail);
      });
  };

  return (
    <div className="flex flex-col w-full h-full bg-white rounded-3xl p-5 items-center justify-around">
      <div className="flex w-full h-full">
        <CloseButton onClick={handleCloseModal}></CloseButton>
      </div>
      <LogoWithTagline></LogoWithTagline>
      <form
        className="auth-form"
        onSubmit={openSignUpModal ? handleSubmitSignUp : handleSubmitLogIn}
      >
        {openLogInModal && signUpSuccessfulMessage && (
          <div className={`${styles.paragraph1} text-center text-blue mb-5`}>
            {signUpSuccessfulMessage}
          </div>
        )}
        {openSignUpModal && (
          <Input
            label="Name"
            id="name"
            name="name"
            type="text"
            value={name}
            onChange={handleNameChange}
          ></Input>
        )}
        <Input
          label="Username"
          id="username"
          name="username"
          type="text"
          value={username}
          onChange={handleUsernameChange}
        ></Input>

        {openSignUpModal && (
          <Input
            label="Email"
            id="email"
            name="email"
            type="email"
            value={email}
            onChange={handleEmailChange}
          ></Input>
        )}
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
        {errorMessage && (
          <div className={`${styles.paragraph1} text-center text-pink`}>
            {errorMessage}
          </div>
        )}
        <button
          className={`${styles.subheading4} bg-purple w-full px-12 py-3 my-4 border border-black rounded-full`}
          type="submit"
        >
          {openSignUpModal ? "Sign Up" : "Log In"}
        </button>
      </form>
      <div className={`${styles.paragraph1}`}>
        {openSignUpModal ? (
          <SwitchMessage
            question="Have an account?"
            hypertext="Login here."
            onClick={handleSwitchToLogIn}
          />
        ) : (
          <SwitchMessage
            question="Don't have an account?"
            hypertext="Sign up here."
            onClick={handleSwitchToSignUp}
          />
        )}
      </div>
    </div>
  );
};

export default AuthenticationModal;
