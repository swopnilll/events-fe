import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

const DropZone = ({ label, onDrop, error }) => {
  const [uploadedFileName, setUploadedFileName] = useState("");

  const handleDrop = useCallback(
    (acceptedFiles) => {
      if (acceptedFiles.length > 0) {
        setUploadedFileName(acceptedFiles[0].name); // Set the uploaded file name
        onDrop(acceptedFiles); // Pass the files to the parent handler
      }
    },
    [onDrop]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: handleDrop,
    accept: "image/*",
  });

  return (
    <div className="w-full mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <div
        {...getRootProps()}
        className={`w-full px-4 py-6 border-dashed border-2 ${
          error ? "border-red-500" : "border-gray-300"
        } rounded-lg shadow-sm focus:outline-none focus:ring-2 ${
          error ? "focus:ring-red-500" : "focus:ring-blue-500"
        } ${isDragActive ? "bg-blue-50" : "bg-gray-50"} cursor-pointer`}
      >
        <input {...getInputProps()} />
        <p className="text-center text-gray-500">
          {isDragActive
            ? "Drop the files here..."
            : "Drag & drop an image here, or click to select one"}
        </p>
      </div>
      {uploadedFileName && (
        <p className="mt-2 text-sm text-gray-700">
          Uploaded File: {uploadedFileName}
        </p>
      )}
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default DropZone;
