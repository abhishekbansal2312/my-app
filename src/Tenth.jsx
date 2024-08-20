import React, { useState } from "react";

const Tenth = () => {

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <input
        type={isPasswordVisible ? "text" : "password"}
        placeholder="Enter your password"
        className="px-4 py-2 border rounded mb-2"
      />
      <button
        onClick={togglePasswordVisibility}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300">
        {isPasswordVisible ? "Hide Password" : "Show Password"}
      </button>
    </div>
  );
};

export default Tenth;
