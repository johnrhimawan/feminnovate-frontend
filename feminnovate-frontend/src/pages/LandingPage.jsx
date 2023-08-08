import { useState } from "react";
import LandingNavbar from "../components/LandingNavbar";
import AuthenticationModal from "../components/AuthenticationModal";
import background from "../assets/yellow-bg.png";
import landingImage from "../assets/landing-img.png";
import styles from "../style";
import About from "../components/About";
import Faq from "../components/Faq";

const LandingPage = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openSignUpModal, setOpenSignUpModal] = useState(false);
  const [openLogInModal, setOpenLogInModal] = useState(false);

  const handleClose = () => {
    setOpenModal(false);
    setOpenSignUpModal(false);
    setOpenLogInModal(false);
  };

  const handleOpenSignUpModal = () => {
    setOpenModal(true);
    setOpenSignUpModal(true);
    setOpenLogInModal(false);
  };

  const handleOpenLogInModal = () => {
    setOpenModal(true);
    setOpenLogInModal(true);
    setOpenSignUpModal(false);
  };

  return (
    <div className="h-screen flex flex-col">
      <div
        className="w-full h-[60%] bg-bottom bg-cover"
        style={{ backgroundImage: `url(${background})` }}
      >
        <LandingNavbar />
        <div className="flex flex-col h-[calc(100vh-110px)]">
          <div className="flex flex-row h-[70%] w-[100%] justify-center items-center">
            <img
              className="scale-50 lg:scale-60 xl:scale-80"
              src={landingImage}
            />
          </div>
          <div className="flex sm:flex-wrap justify-center gap-8">
            <button
              onClick={handleOpenSignUpModal}
              className={`${styles.subheading4} bg-purple w-[15%] px-12 py-3 my-10 border border-black rounded-full`}
              type="button"
            >
              Sign Up
            </button>
            <button
              onClick={handleOpenLogInModal}
              className={`${styles.subheading4} w-[15%] px-12 py-3 my-10 border border-black rounded-full`}
              type="button"
            >
              Log In
            </button>
          </div>
        </div>
        <About />
        <Faq />
      </div>
      {openModal && (openSignUpModal || openLogInModal) && (
        <div className="flex fixed inset-0 h-full w-full justify-center items-center z-20">
          <div
            className="flex fixed inset-0 h-full w-full bg-black bg-opacity-50 backdrop-blur-sm z-20"
            onClick={handleClose}
          ></div>
          <div className="w-1/4 h-auto z-20">
            <AuthenticationModal
              openSignUpModal={openSignUpModal}
              openLogInModal={openLogInModal}
              handleOpenSignUpModal={handleOpenSignUpModal}
              handleOpenLogInModal={handleOpenLogInModal}
              handleCloseModal={handleClose}
            ></AuthenticationModal>
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingPage;
