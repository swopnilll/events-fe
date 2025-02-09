import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import { XIcon } from "lucide-react";

import InputField from "../components/InputField/InputField";

import Logo from "../components/logo/Logo";

import { useAuth } from "../contexts/AuthContext/useAuth";

const SignUp = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/"); // Goes back to the previous page
  };

  const navigateToLogin = () => {
    navigate("/auth/login");
  };

  const { register } = useAuth();

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear error for the field being modified
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  // Validate inputs
  const validate = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
    }

    if (!formData.password) {
      newErrors.password = "Password is required.";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    }

    if (!formData.fullName) {
      newErrors.fullName = "Full name is required.";
    } else if (formData.fullName.trim().split(" ").length < 2) {
      newErrors.fullName = "Please enter your full name (first and last name).";
    }

    return newErrors;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const response = await register(formData); // Call register from context
      if (response.success) {
        console.log("Successfully registered", "success");
        navigate("/"); // Navigate to homepage
      } else {
        console.log(response.error); // Show API error
        console.log("Registration failed", "error");
      }
    } catch (error) {
      console.log("Something went wrong. Please try again.");
      console.log("Something went wrong", error);
    }
  };

  return (
    <>
      <div className="w-screen h-screen flex flex-col lg:flex-row">
        {/* Graphics Section */}
        <div className="hidden bg-[#2B293D] lg:block lg:w-2/4 p-6 text-white text-3xl">
          <Logo className="h-20" />

          <div className="text-white text-3xl font-bold flex pt-32">
            <div>
              <p>Discover tailored events.</p>
              <p>Sign in for personalized recommendations today!</p>
            </div>
          </div>
        </div>

        {/* Login Form */}
        <div className="p-6 bg-white h-full shadow-lg lg:w-3/4 flex flex-col items-center justify-around">
          <h1 className="text-2xl font-semibold text-gray-800 mb-6 text-left w-3/4">
            Create Account
          </h1>

          <form onSubmit={handleSubmit} className="h-3/4 w-3/4 flex flex-col">
            <InputField
              label="Full Name"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
              error={errors.fullName}
            />

            <InputField
              label="Email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              error={errors.email}
            />

            <InputField
              label="Password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              error={errors.password}
            />

            <button
              type="submit"
              className="mt-4 w-full px-4 py-2 bg-[#2b293dd3] text-white font-semibold rounded-lg shadow hover:bg-[#2b293d] transition duration-300"
            >
              Create Account
            </button>

            <div className="text-[#636363ce] text-sm mt-6">
              <span>Already have an account? </span>
              <span
                className="cursor-pointer text-[#636363] font-bold"
                onClick={navigateToLogin}
              >
                {" "}
                Sign In
              </span>
            </div>
          </form>
        </div>
      </div>
      <XIcon
        className="size-6 text-black absolute right-6 top-4 cursor-pointer"
        onClick={handleBack}
      />
    </>
  );
};

SignUp.propTypes = {};

export default SignUp;
