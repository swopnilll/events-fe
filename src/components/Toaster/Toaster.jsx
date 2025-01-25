import React, { useState, useEffect } from "react";

const Toaster = () => {
  const [toast, setToast] = useState({ message: "", type: "", visible: false });

  // Function to show the toast
  const showToast = (message, type = "info") => {
    setToast({ message, type, visible: true });

    // Automatically hide the toast after 3 seconds
    setTimeout(() => {
      setToast((prevToast) => ({ ...prevToast, visible: false }));
    }, 3000);
  };

  useEffect(() => {
    // Attach the showToast function globally for easy access
    window.showToast = showToast;
  }, []);

  return (
    <div
      className={`fixed bottom-4 right-4 max-w-sm px-4 py-3 rounded-lg shadow-lg transition-all transform ${
        toast.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      } ${
        toast.type === "success"
          ? "bg-green-500 text-white"
          : toast.type === "error"
          ? "bg-red-500 text-white"
          : "bg-blue-500 text-white"
      }`}
    >
      {toast.message}
    </div>
  );
};

export default Toaster;
