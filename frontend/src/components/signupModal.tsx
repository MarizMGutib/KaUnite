import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";

interface SignupModalProps {
  onClose: () => void;
  onSwitchToLogin?: () => void;  // Made optional
}

const SignupModal: React.FC<SignupModalProps> = ({ onClose, onSwitchToLogin }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
  });

  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const togglePasswordVisibility = (field: 'password' | 'confirmPassword') => {
    if (field === 'password') {
      setShowPassword(!showPassword);
    } else {
      setShowConfirmPassword(!showConfirmPassword);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Client-side validation (optional)
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    if (!formData.agreeTerms) {
      alert("Please agree to the terms and conditions");
      return;
    }
  
    try {
      const response = await fetch("http:///localhost:5000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          username: formData.username,
          email: formData.email,
          password: formData.password,
        }),
      });
  
      if (response.ok) {
        alert("Signup successful");
        onClose();  // Close the modal after successful signup
      } else {
        const error = await response.json();
        alert(error.message);
      }
    } catch (error) {
      console.error("Signup error:", error);
      alert("An error occurred during signup");
    }
  };
  

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div ref={modalRef} className="w-full max-w-[30rem] rounded-2xl bg-white p-8 shadow-lg">
        <h2 className="mb-6 text-center text-2xl font-semibold">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          {/* Full Name Input */}
          <div className="mb-4">
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
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
                <Image src="/login/person.svg" width={20} height={20} alt="User" />
              </span>
            </div>
          </div>

          {/* Username Input */}
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
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
                <Image src="/login/person.svg" width={20} height={20} alt="User" />
              </span>
            </div>
          </div>

          {/* Email Input */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
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
                <Image src="/login/mail.svg" width={20} height={20} alt="Email" />
              </span>
            </div>
          </div>

          {/* Password Input */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="relative mt-1">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Create a password"
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-1 focus:ring-green-500"
                required
              />
              <span
                className="absolute inset-y-0 right-3 flex cursor-pointer items-center"
                onClick={() => togglePasswordVisibility('password')}
              >
                <Image
                  src={showPassword ? "/login/hidden.png" : "/login/visible.png"}
                  width={20}
                  height={20}
                  alt={showPassword ? "Hide password" : "Show password"}
                />
              </span>
            </div>
          </div>

          {/* Confirm Password Input */}
          <div className="mb-4">
            <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <div className="relative mt-1">
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirm-password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm your password"
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-1 focus:ring-green-500"
                required
              />
              <span
                className="absolute inset-y-0 right-3 flex cursor-pointer items-center"
                onClick={() => togglePasswordVisibility('confirmPassword')}
              >
                <Image
                  src={showConfirmPassword ? "/login/hidden.png" : "/login/visible.png"}
                  width={20}
                  height={20}
                  alt={showConfirmPassword ? "Hide password" : "Show password"}
                />
              </span>
            </div>
          </div>

          {/* Terms and Conditions Checkbox */}
          <div className="mb-6 flex items-center">
            <input
              type="checkbox"
              id="terms"
              name="agreeTerms"
              checked={formData.agreeTerms}
              onChange={handleChange}
              className="mr-2 h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
              required
            />
            <label htmlFor="terms" className="text-sm text-gray-700">
              Agree to the Terms and Conditions
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full rounded-lg bg-[#165B4B] py-2 text-white transition duration-200 hover:bg-green-800"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-sm text-gray-600 flex justify-center">
          Already have an account?{" "}
          <button
            className="text-green-700 hover:text-green-900 underline"
            onClick={(e) => {
              e.preventDefault();
              if (typeof onSwitchToLogin === 'function') {
                onSwitchToLogin();
              } else {
                console.error('onSwitchToLogin is not a function');
                onClose();
              }
            }}
          >
            Log in
          </button>
        </p>
      </div>
    </div>
  );
};

export default SignupModal;