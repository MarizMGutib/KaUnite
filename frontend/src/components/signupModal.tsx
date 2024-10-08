import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface SignupModalProps {
  onClose: () => void;
}

const SignupModal: React.FC<SignupModalProps> = ({ onClose }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
  });
  const [error, setError] = useState("");
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    if (!formData.agreeTerms) {
      setError("You must agree to the Terms and Conditions");
      return;
    }

    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: formData.fullName,
          username: formData.username,
          email: formData.email,
          password: formData.password,
        }),
      });

      if (response.ok) {
        router.push("/login");
      } else {
        const data = await response.json();
        setError(data.message || "Signup failed");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <>
           <div className="modal mb-[45rem]">
        <div className="flex justify-end items-center">
          <button onClick={onClose} className="text-2xl font-bold">&times;</button>
        </div>
      </div>
      <div className="w-full max-w-[30rem] rounded-2xl bg-white p-8 shadow-lg">       
         <div className="w- max-w-lg rounded-lg bg-white p-8">
          <h2 className="mb-6 text-center text-2xl font-semibold">Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <div className="relative mt-1">
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-1 focus:ring-green-500"
                  required
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
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="Enter your username"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-1 focus:ring-green-500"
                  required
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
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-1 focus:ring-green-500"
                  required
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
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Create a password"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-1 focus:ring-green-500"
                  required
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
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm your password"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-1 focus:ring-green-500"
                  required
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
                id="agreeTerms"
                name="agreeTerms"
                checked={formData.agreeTerms}
                onChange={handleChange}
                className="mr-2 h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
                required
              />
              <label htmlFor="agreeTerms" className="text-sm text-gray-700">
                Agree to the Terms and Conditions
              </label>
            </div>
            {error && <p className="mb-4 text-red-500">{error}</p>}

            <button
              type="submit"
              className="w-full rounded-lg bg-green-700 py-2 text-white transition duration-200 hover:bg-green-800"
            >
              Sign Up
            </button>
          </form>
          <p className="mt-4 text-sm text-gray-600 flex justify-center">
            Already have an account?{" "}
            <a
              href="#"
              className="text-green-700 hover:text-green-900 underline "
            >
              Log in
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignupModal;
