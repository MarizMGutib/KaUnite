"use client";
import React, { useState } from "react";
import AuthLogin from "@/components/authLogin";

const ButtonModal = () => {
  const [isLoginClicked, setIsLoginClicked] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isForgotPasswordOpen, setIsForgotPasswordOpen] = useState(false);
  const [isResetPasswordOpen, setisResetPasswordOpen] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const handleLoginClick = () => {
    setIsLoginClicked(true);
    setIsLoginOpen(true);
    setIsSignupOpen(false);
    setIsForgotPasswordOpen(false); // Ensure other modals are closed
    setisResetPasswordOpen(false);
  };

  const handleSignupClick = () => {
    setIsLoginClicked(false);
    setIsSignupOpen(true);
    setIsLoginOpen(false);
    setIsForgotPasswordOpen(false); // Ensure other modals are closed
    setisResetPasswordOpen(false);
  };

  const handleForgotPasswordClick = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsForgotPasswordOpen(true);
    setIsSignupOpen(false);
    setIsLoginOpen(false); // Close login modal when opening forgot password modal
    setisResetPasswordOpen(false);
  };

  const handleResetPasswordClick = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setisResetPasswordOpen(true);
    setIsForgotPasswordOpen(false);
    setIsSignupOpen(false);
    setIsLoginOpen(false); // Close login modal when opening forgot password modal
  };

  const closeSignupModal = () => {
    setIsSignupOpen(false);
  };

  const closeLoginModal = () => {
    setIsLoginOpen(false);
  };

  const closeForgotPasswordModal = () => {
    setIsForgotPasswordOpen(false);
  };

  const closeResetPasswordModal = () => {
    setisResetPasswordOpen(false);
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  return (
    <div className="flex items-center">
      {/* Signup and Login button */}
      <div className="text-sm lg:text-lg">
        <button
          className={`rounded-l-full px-4 py-2 font-bold transition-all duration-500 lg:px-8 lg:py-3 ${
            isLoginClicked ? "bg-secondary-color text-white" : "bg-white"
          }`}
          onClick={handleSignupClick}
        >
          Signup
        </button>
        <button
          className={`rounded-r-full px-4 py-2 font-bold transition-all duration-500 lg:px-8 lg:py-3 ${
            isLoginClicked ? "bg-white" : "bg-secondary-color text-white"
          }`}
          onClick={handleLoginClick}
        >
          Login
        </button>
      </div>

      {/* Signup Modal */}
      <div className={`modal-container ${isSignupOpen ? "show" : ""}`}>
        <div className="modal-wrapper w-full md:w-[550px] lg:w-[550px]">
          <div className="modal-content border-2 border-secondary-color">
            <button
              onClick={closeSignupModal}
              className="float-right mr-3 mt-3 lg:mr-1 lg:mt-1"
            >
              <img
                src="/icons/close-icon.svg"
                alt=""
                className="size-4 lg:size-7"
              />
            </button>
            <div className="flex flex-col px-6 lg:px-6">
              <span className="pt-12 text-lg font-bold text-primary-color lg:pt-6 lg:text-2xl">
                Create Account
              </span>
              <span className="text-sm lg:text-xl">
                To continue, fill up the required form
              </span>
            </div>
            <form className="relative flex flex-col px-8 pt-2 text-xs lg:px-10 lg:pt-4 lg:text-lg">
              <label htmlFor="signup-fullname">Full Name</label>
              <input
                type="text"
                id="signup-fullname"
                name="signup-fullname"
                className="mx-3 my-1 rounded-md border-y-2 border-t-2 border-primary-color px-3 py-1 text-[10px] lg:mx-3 lg:rounded-lg lg:text-base"
                placeholder="Last Name, First Name"
              />
              <label htmlFor="signup-username">Username</label>
              <input
                type="text"
                id="signup-username"
                name="signup-username"
                className="mx-3 my-1 rounded-md border-y-2 border-t-2 border-primary-color px-3 py-1 text-[10px] lg:mx-3 lg:rounded-lg lg:text-base"
                placeholder="Enter your username"
              />
              <label htmlFor="signup-email">Email</label>
              <input
                type="email"
                id="signup-email"
                name="signup-email"
                className="mx-3 my-1 rounded-md border-y-2 border-t-2 border-primary-color px-3 py-1 text-[10px] lg:mx-3 lg:rounded-lg lg:text-base"
                placeholder="example@gmail.com"
              />
              <label htmlFor="signup-number">Phone Number</label>
              <input
                type="number"
                id="signup-number"
                name="signup-number"
                className="mx-3 my-1 rounded-md border-y-2 border-t-2 border-primary-color px-3 py-1 text-[10px] lg:mx-3 lg:rounded-lg lg:text-base"
                placeholder="+639989898989 / 09898989898"
              />
              <label htmlFor="signup-date">Birth Date</label>
              <input
                type="date"
                id="signup-date"
                name="signup-date"
                className="mx-3 my-1 rounded-md border-y-2 border-t-2 border-primary-color px-3 py-1 text-[10px] lg:mx-3 lg:rounded-lg lg:text-base"
              />
              <label htmlFor="signup-password">Password</label>
              <input
                type={passwordVisible ? "text" : "password"}
                id="signup-password"
                name="signup-password"
                className="mx-3 my-1 rounded-md border-y-2 border-t-2 border-primary-color px-3 py-1 text-[10px] lg:mx-3 lg:rounded-lg lg:text-base"
                placeholder="Enter your Password"
              />
              <img
                src={
                  passwordVisible ? "/icons/eye.svg" : "/icons/eye-slash.svg"
                }
                alt="Toggle Visibility"
                className="absolute right-14 top-[296px] size-4 cursor-pointer lg:right-[62px] lg:top-[414px] lg:size-7"
                onClick={togglePasswordVisibility}
              />
              <label htmlFor="signup-confirm-password">Confirm Password</label>
              <input
                type={confirmPasswordVisible ? "text" : "password"}
                id="signup-confirm-password"
                name="signup-confirm-password"
                className="mx-3 my-1 rounded-md border-y-2 border-t-2 border-primary-color px-3 py-1 text-[10px] lg:mx-3 lg:rounded-lg lg:text-base"
                placeholder="Confirm Password"
              />
              <img
                src={
                  confirmPasswordVisible
                    ? "/icons/eye.svg"
                    : "/icons/eye-slash.svg"
                }
                alt="Toggle Visibility"
                className="absolute right-14 top-[348px] size-4 cursor-pointer lg:right-[62px] lg:top-[486px] lg:size-7"
                onClick={toggleConfirmPasswordVisibility}
              />
              <span className="text-center text-sm lg:text-lg">
                By signing up, you agree to the
              </span>
              <span className="pb-2 text-center text-[10px] font-semibold text-primary-color underline underline-offset-2 lg:cursor-pointer lg:pb-4 lg:text-sm lg:underline-offset-4">
                Terms of Service and Privacy Policy
              </span>
              <div className="mx-16 lg:mx-28">
                <button
                  type="submit"
                  className="w-full rounded-md bg-secondary-color py-1 text-sm text-white lg:rounded-xl lg:py-2 lg:text-xl"
                >
                  Create Account
                </button>
              </div>
              <span className="pt-1 text-center text-sm lg:pt-2 lg:text-lg">
                Already have an account?{" "}
                <span
                  onClick={handleLoginClick}
                  className="font-semibold text-primary-color lg:cursor-pointer"
                >
                  Login
                </span>
              </span>
            </form>
          </div>
        </div>
      </div>

      {/* Login Modal */}
      <div className={`modal-container ${isLoginOpen ? "show" : ""}`}>
        <div className="modal-wrapper w-full md:w-[550px] lg:w-[550px]">
          <div className="modal-content border-2 border-secondary-color">
            <button
              onClick={closeLoginModal}
              className="float-right mr-3 mt-3 lg:mr-1 lg:mt-1"
            >
              <img
                src="/icons/close-icon.svg"
                alt=""
                className="size-4 lg:size-7"
              />
            </button>
            <div className="flex flex-col px-6 lg:px-10">
              <span className="pt-24 text-lg font-bold text-primary-color lg:pt-6 lg:text-2xl">
                Login to you Account
              </span>
              <span className="pb-4 pt-1 text-sm lg:pb-8 lg:pt-2 lg:text-xl">
                Welcome back! Select method to login
              </span>
            </div>
            <div className="flex flex-col">
              <div className="px-6 lg:px-10">
                <AuthLogin />
              </div>
              <div className="flex flex-row items-center justify-center py-2 text-center lg:py-6">
                <div className="w-full border-b-[1px] border-b-black"></div>
                <span className="w-[390px] text-sm lg:w-[430px] lg:text-lg">
                  or continue with
                </span>
                <div className="w-full border-b-[1px] border-b-black"></div>
              </div>
              <form className="relative flex flex-col px-10 lg:px-14">
                <label htmlFor="login-username" className="text-xs lg:text-lg">
                  Email or Username
                </label>
                <img
                  src="/icons/envelope.svg"
                  alt=""
                  className="absolute left-[64px] top-7 size-5 lg:left-[94px] lg:top-[42px] lg:size-8 opacity-75"
                />
                <input
                  type="text"
                  id="login-username"
                  name="login-username"
                  placeholder="Enter Email or Username"
                  className="mx-4 my-2 rounded-md border-y-2 border-t-2 border-primary-color py-1 pl-8 pr-6 text-[10px] lg:mx-6 lg:rounded-xl lg:py-2 lg:pl-14 lg:pr-10 lg:text-base"
                />
                <label htmlFor="login-password" className="text-xs lg:text-lg">
                  Password
                </label>
                <img
                  src="/icons/lock-closed.svg"
                  alt=""
                  className="absolute left-[64px] top-[86px] size-5 lg:left-[94px] lg:top-[130px] lg:size-8 opacity-75"
                />
                <img
                  src={
                    passwordVisible ? "/icons/eye.svg" : "/icons/eye-slash.svg"
                  }
                  alt="Toggle Visibility"
                  className="absolute right-[66px] top-[88px] size-4 cursor-pointer lg:right-24 lg:top-[130px] lg:size-8"
                  onClick={togglePasswordVisibility}
                />
                <input
                  type={passwordVisible ? "text" : "password"}
                  id="login-password"
                  name="login-password"
                  placeholder="Enter your Password"
                  className="mx-4 my-2 rounded-md border-y-2 border-t-2 border-primary-color py-1 pl-8 pr-6 text-[10px] lg:mx-6 lg:rounded-xl lg:py-2 lg:pl-14 lg:pr-10 lg:text-base"
                />
                <div className="flex justify-between px-3 pt-2 lg:pt-4">
                  <label className="flex cursor-pointer flex-row items-center justify-center">
                    <input id="custom-checkbox" type="checkbox" />
                    <span className="ml-1 text-xs lg:ml-2 lg:text-lg">
                      Remember me
                    </span>
                  </label>
                  <button
                    className="text-xs font-semibold text-primary-color lg:text-lg"
                    onClick={handleForgotPasswordClick}
                  >
                    Forgot Password?
                  </button>
                </div>
                <div className="mx-20 py-5 lg:mx-28 lg:py-8">
                  <button
                    type="submit"
                    className="w-full rounded-md bg-secondary-color py-1 text-sm font-semibold text-white lg:rounded-xl lg:py-2 lg:text-xl"
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
            <div className="text-center text-xs lg:text-lg">
              Don&apos;t have an account?{" "}
              <span
                onClick={handleSignupClick}
                className="cursor-pointer font-semibold text-primary-color"
              >
                Create Account
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Forgot Password Modal */}
      <div className={`modal-container ${isForgotPasswordOpen ? "show" : ""}`}>
        <div className="modal-wrapper w-full md:w-[550px] lg:w-[550px]">
          <div className="modal-content border-2 border-secondary-color">
            <button onClick={handleLoginClick}>
              <img
                src="/icons/arrow-left.svg"
                alt=""
                className="ml-3 mt-3 size-4 lg:ml-1 lg:mt-1 lg:size-7"
              />
            </button>
            <button
              onClick={closeForgotPasswordModal}
              className="float-right mr-3 mt-3 lg:mr-1 lg:mt-1"
            >
              <img
                src="/icons/close-icon.svg"
                alt=""
                className="size-4 lg:size-7"
              />
            </button>
            <div className="flex flex-col px-10 pt-10 lg:px-12 lg:pt-24">
              <span className="pt-20 text-lg font-bold text-primary-color lg:pt-6 lg:text-2xl">
                Forgot Password
              </span>
              <span className="pb-4 pt-1 text-sm lg:pb-8 lg:pt-2 lg:text-xl">
                Enter the email address associated with your account
              </span>
            </div>
            <div>
              <form className="relative flex flex-col px-14 pt-2 text-sm lg:px-20 lg:pt-4 lg:text-lg">
                <div className="">
                  <label
                    htmlFor="forgot-password-email"
                    className="text-xs lg:text-lg"
                  >
                    Email
                  </label>
                </div>
                <input
                  type="email"
                  id="forgot-password-email"
                  name="forgot-password-email"
                  className="my-1 rounded-md border-y-[2px] border-primary-color px-8 py-1 text-[10px] lg:rounded-xl lg:border-y-[3px] lg:px-16 lg:py-2 lg:text-base"
                  placeholder="example@gmail.com"
                />
                <img
                  src="/icons/envelope.svg"
                  alt=""
                  className="absolute left-16 top-[38px] size-5 lg:left-24 lg:top-[54px] lg:size-8 opacity-75"
                />
              </form>
              <div className="mx-24 pb-20 pt-3 lg:mx-20 lg:pb-40 lg:pt-4">
                <button
                  className="w-full rounded-md bg-secondary-color py-1 text-sm text-white lg:rounded-xl lg:py-2 lg:text-xl"
                  onClick={handleResetPasswordClick}
                >
                  Reset Password
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Reset Password Modal */}
      <div className={`modal-container ${isResetPasswordOpen ? "show" : ""}`}>
        <div className="modal-wrapper w-full md:w-[550px] lg:w-[550px]">
          <div className="modal-content border-2 border-secondary-color">
            <button
              onClick={closeResetPasswordModal}
              className="float-right mr-3 mt-3 lg:mr-1 lg:mt-1"
            >
              <img
                src="/icons/close-icon.svg"
                alt=""
                className="size-4 lg:size-7"
              />
            </button>
            <div className="flex flex-col px-10 pt-24 lg:px-14 lg:pt-24">
              <span className="pt-3 text-lg font-semibold text-primary-color lg:pt-6 lg:text-2xl">
                Enter New Password
              </span>
              <span className="pb-2 pt-1 text-sm lg:pb-4 lg:pt-2 lg:text-xl">
                Enter your new Password
              </span>
            </div>
            <div>
              <form className="relative flex flex-col px-14 pt-2 text-xs lg:px-20 lg:pt-4 lg:text-lg">
                <div className="">
                  <label htmlFor="reset-password">Password</label>
                </div>
                <img
                  src="/icons/lock-closed.svg"
                  alt=""
                  className="absolute left-[72px] top-9 size-5 lg:left-[104px] lg:top-[59px] lg:size-8 opacity-75"
                />
                <input
                  type={passwordVisible ? "text" : "password"}
                  id="reset-password"
                  name="reset-password"
                  className="mx-2 my-2 rounded-md border-y-[2px] border-primary-color px-8 py-1 text-xs lg:rounded-xl lg:border-y-[3px] lg:px-16 lg:py-2 lg:text-base"
                  placeholder="Enter your new Password"
                />
                <img
                  src={
                    passwordVisible ? "/icons/eye.svg" : "/icons/eye-slash.svg"
                  }
                  alt="Toggle Visibility"
                  className="absolute right-[74px] top-[38px] size-4 cursor-pointer lg:right-[105px] lg:top-[61px] lg:size-7"
                  onClick={togglePasswordVisibility}
                />
                <div className="">
                  <label htmlFor="confirm-reset-password">
                    Confirm Password
                  </label>
                </div>
                <img
                  src="/icons/lock-closed.svg"
                  alt=""
                  className="absolute left-[72px] top-[96px] size-5 lg:left-[104px] lg:top-[149px] lg:size-8 opacity-75"
                />
                <input
                  type={confirmPasswordVisible ? "text" : "password"}
                  id="confirm-reset-password"
                  name="confirm-reset-password"
                  className="mx-2 my-2 rounded-md border-y-[2px] border-primary-color px-8 py-1 text-xs lg:rounded-xl lg:border-y-[3px] lg:px-16 lg:py-2 lg:text-base"
                  placeholder="Confirm your new Password"
                />
                <img
                  src={
                    confirmPasswordVisible
                      ? "/icons/eye.svg"
                      : "/icons/eye-slash.svg"
                  }
                  alt="Toggle Visibility"
                  className="absolute right-[74px] top-[98px] size-4 cursor-pointer lg:right-[105px] lg:top-[151px] lg:size-7"
                  onClick={toggleConfirmPasswordVisibility}
                />
                <div className="mx-12 pb-16 pt-4 lg:mx-20 lg:pb-20">
                  <button
                    type="submit"
                    className="mb-4 w-full rounded-md bg-secondary-color py-1 text-sm text-white lg:mb-12 lg:rounded-xl lg:py-2 lg:text-xl"
                  >
                    Confirm
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ButtonModal;
