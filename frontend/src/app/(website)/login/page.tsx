"use client"; 
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import AuthLogin from "@/components/authLogin";
import SignupModal from "@/components/signupModal";
import { signIn } from "next-auth/react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);

  const router = useRouter();

  const handleSignUpClick = () => {
    setIsSignupModalOpen(true);
  };

  const handleCloseSignupModal = () => {
    setIsSignupModalOpen(false);
  };
  const handleGoogleSignIn = () => {
    signIn("google", { callbackUrl: "/dashboard" });
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Store the token in localStorage or a secure cookie
        localStorage.setItem('token', data.token);
        router.push('/dashboard');
      } else {
        setError(data.message || 'Login failed');
      }
    } catch (err) {
      setError("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      {isSignupModalOpen ? (
        <SignupModal onClose={handleCloseSignupModal} />
      ) : (
        <div className="w-full max-w-sm rounded-2xl bg-white p-8 shadow-lg ">
          <form className="space-y-4 " onSubmit={handleSubmit}>
            {error && <div className="text-red-500 text-sm">{error}</div>}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Username or Email
              </label>
              <div className={`mt-1 flex items-center rounded-md border px-3 py-2 shadow-sm ${
                email.length > 0 ? 'border-green-500' : 'border-gray-300'
              }`}>
                <Image
                  src="/login/person.svg"
                  width={20}
                  height={20}
                  alt="User"
                />
                <input
                  type="email"
                  id="email"
                  className="ml-2 flex-1 focus:outline-none"
                  placeholder="Enter username or email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 "
              >
                Password
              </label>
              <div className={`mt-1 flex items-center rounded-md border px-3 py-2 shadow-sm ${
                password.length > 0 ? 'border-green-500' : 'border-gray-300'
              }`}>
                <Image
                  src="/login/lock.png"
                  width={20}
                  height={20}
                  alt="Lock"
                />
                <input
                  type={passwordVisible ? "text" : "password"}
                  id="password"
                  className="ml-2 flex-1 focus:outline-none"
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <img
                  src={
                    passwordVisible ? "/login/visible.png" : "/icons/eye-slash.svg"
                  }
                  alt="Toggle Visibility"
                  width={16}
                  height={16}
                  className="h-4 w-4 cursor-pointer"
                  onClick={() => setPasswordVisible(!passwordVisible)}
                />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 rounded border-green-500 bg-white"
                />
                <span className="ml-2 text-sm text-gray-600">Remember Me</span>
              </label>
              <a href="#" className="text-sm text-green-500 hover:underline">
                Forgot Password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full rounded-md bg-[#165B4B] py-2 text-white shadow-md transition  disabled:opacity-50"
              disabled={isLoading}
            >
              {isLoading ? "Logging in..." : "Login"}
            </button>
          </form>
          <div className="mt-6 flex items-center justify-center">
            <span className="flex-1 border-t border-gray-300"></span>
            <span className="mx-4 text-sm text-gray-500">or</span>
            <span className="flex-1 border-t border-gray-300"></span>
          </div>
          <button
            className="mt-4 w-full flex items-center justify-center rounded-md border border-green-900 bg-white py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
            onClick={handleGoogleSignIn}          >
            <img src="/landing/google.png" alt="Google logo" className="mr-2 h-5 w-5" />
            Login with Google
          </button>

          <div className="mt-6 text-center text-sm">
            <span className="text-gray-600">Don't have an account?</span>{" "}
            <button
              className="font-medium text-[#165B4B] hover:underline"
              onClick={handleSignUpClick}
            >
              Sign Up
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
