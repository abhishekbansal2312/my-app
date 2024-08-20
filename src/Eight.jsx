import React, { useState } from "react";

const Eight = () => {
  const [theme, settheme] = useState(false);

  const changeTheme = () => {
    settheme(!theme);
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center ${
        theme ? "bg-gray-800 text-white" : "bg-white text-black"
      }`}>
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">
          {theme ? "Dark Mode" : "Light Mode"}
        </h1>
        <button
          onClick={changeTheme}
          className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
          Toggle {theme ? "Light" : "Dark"} Mode
        </button>
      </div>
    </div>
  );
};

export default Eight;
