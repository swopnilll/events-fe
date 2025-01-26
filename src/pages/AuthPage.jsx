import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../contexts/AuthContext/useAuth"; // Import the useAuth hook

import { useLoader } from "../contexts/LoaderContext/useLoader";
import { useToaster } from "../contexts/ToasterContext/useToaster";

import { XIcon } from "lucide-react";

import InputField from "../components/InputField/InputField";
import Logo from "../components/logo/Logo";

const AuthPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const { showToast } = useToaster();
  const { loading, login, error } = useAuth();
  const { showLoader, hideLoader } = useLoader();

  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

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

    return newErrors;
  };

  const navigatetoSignup = () => {
    navigate("/auth/signUp");
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
      showLoader();
      const response = await login(formData.email, formData.password);

      if (response?.success) {
        showToast("Login Successfull", "success");
        navigate(-1);
      } else {
        showToast("Login failed", "error");
      }
    } catch (error) {
      console.error("Login failed:", error);
    } finally {
      hideLoader();
    }

    setErrors({});
  };

  return (
    <>
      <div className="w-screen h-screen flex flex-col lg:flex-row">
        {/* Graphics Section */}
        <div className="hidden bg-[#2B293D] lg:block lg:w-2/4 p-6 text-white text-3xl">
          <Logo className="h-20" />

          <div className="text-white text-3xl font-bold flex py-32">
            <div>
              <p>Discover tailored events.</p>
              <p>Sign in for personalized recommendations today!</p>
            </div>
          </div>
        </div>

        {/* Login Form */}
        <div className="p-6 bg-white h-full shadow-lg lg:w-3/4 flex flex-col items-center justify-around">
          <h1 className="text-2xl font-semibold text-gray-800 mb-6 text-left w-3/4">
            Login
          </h1>

          <form onSubmit={handleSubmit} className="h-3/4 w-3/4 flex flex-col">
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
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            <button
              type="submit"
              className="mt-4 w-full px-4 py-2 bg-[#2b293dd3] text-white font-semibold rounded-lg shadow hover:bg-[#2b293d] transition duration-300"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </button>

            <div className="text-[#636363ce] text-sm mt-6">
              <span>Don’t have an account? </span>
              <span
                className="cursor-pointer text-[#636363] font-bold"
                onClick={navigatetoSignup}
              >
                {" "}
                Sign Up
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

AuthPage.propTypes = {};

export default AuthPage;
