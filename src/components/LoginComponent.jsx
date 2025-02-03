import { motion } from "framer-motion";
import { Lock } from "lucide-react";

import { useNavigate } from "react-router-dom";

const LoginPrompt = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="flex justify-center items-center min-h-screen bg-gray-100"
    >
      <div
        onClick={() => navigate(`/auth/login`)}
        className="bg-white p-8 rounded-lg shadow-lg w-96 text-center cursor-pointer"
      >
        <h2 className="text-2xl font-bold mb-4">Please Log In</h2>
        <p className="text-lg mb-4">You must log in to view the events list.</p>
        <div className="mt-4 text-yellow-500">
          <Lock size={24} className="inline mr-2" />
          Log in to continue.
        </div>
      </div>
    </motion.div>
  );
};

export default LoginPrompt;
