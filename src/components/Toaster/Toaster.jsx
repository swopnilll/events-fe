import React from "react";

import { useToaster } from "../../contexts/ToasterContext/useToaster";

const Toaster = () => {
  const { toast } = useToaster();

  return (
    <div
      className={`fixed top-4 right-4 max-w-sm px-4 py-3 rounded-lg shadow-lg transition-all transform ${
        toast.visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
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
