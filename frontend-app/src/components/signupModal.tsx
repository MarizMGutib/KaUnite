import React from "react";
import Image from "next/image";

interface SignupModalProps {
  onClose: () => void;
}

const SignupModal: React.FC<SignupModalProps> = ({ onClose }) => {
  return (
    <>
      <div className="modal mb-[45rem]">
        <button onClick={onClose}>x</button>
        {/* Your modal content here */}
      </div>
      <div className="w-full max-w-[30rem] rounded-2xl bg-white p-8 shadow-lg">
        <div className="w- max-w-lg rounded-lg bg-white p-8">
          <h2 className="mb-6 text-center text-2xl font-semibold">Sign Up</h2>
          <form>
            <div className="mb-4">
              <label
                htmlFor="full-name"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <div className="relative mt-1">
                <input
                  type="text"
                  id="full-name"
                  placeholder="Enter your full name"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-1 focus:ring-green-500"
                />
                <span className="absolute inset-y-0 right-3 flex items-center">
                <Image
                  src="/login/person.svg"
                  width={20}
                  height={20}
                  alt="User"
                />
                </span>
              </div>
            </div>

            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700"
              >
                Username
              </label>
              <div className="relative mt-1">
                <input
                  type="text"
                  id="username"
                  placeholder="Enter your username"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-1 focus:ring-green-500"
                />
                <span className="absolute inset-y-0 right-3 flex items-center">
                <Image
                  src="/login/person.svg"
                  width={20}
                  height={20}
                  alt="User"
                />
                </span>
              </div>
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <div className="relative mt-1">
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email address"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-1 focus:ring-green-500"
                />
                <span className="absolute inset-y-0 right-3 flex items-center">
                <Image
                  src="/login/mail.svg"
                  width={20}
                  height={20}
                  alt="User"
                />
                </span>
              </div>
            </div>

            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="relative mt-1">
                <input
                  type="password"
                  id="password"
                  placeholder="Create a password"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-1 focus:ring-green-500"
                />
                <span className="absolute inset-y-0 right-3 flex cursor-pointer items-center">
                <Image
                  src="/login/visible.png"
                  width={20}
                  height={20}
                  alt="User"
                />
                </span>
              </div>
            </div>

            <div className="mb-4">
              <label
                htmlFor="confirm-password"
                className="block text-sm font-medium text-gray-700"
              >
                Confirm Password
              </label>
              <div className="relative mt-1">
                <input
                  type="password"
                  id="confirm-password"
                  placeholder="Confirm your password"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-1 focus:ring-green-500"
                />
                <span className="absolute inset-y-0 right-3 flex cursor-pointer items-center">
                <Image
                  src="/login/visible.png"
                  width={20}
                  height={20}
                  alt="User"
                />
                </span>
              </div>
            </div>
            <div className="mb-6 flex items-center">
              <input
                type="checkbox"
                id="terms"
                className="mr-2 h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
              />
              <label htmlFor="terms" className="text-sm text-gray-700">
                Agree to the Terms and Conditions
              </label>
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-green-700 py-2 text-white transition duration-200 hover:bg-green-800"
            >
              Sign Up
            </button>
          </form>
          <p className="mt-4 text-sm text-gray-600 flex justify-center">
            Already have an account?{" "}
            <a href="#" className="text-green-700 hover:text-green-900 underline ">
              Log in
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignupModal;
