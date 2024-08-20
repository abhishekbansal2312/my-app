import React, { useState } from "react";

const Second = () => {
  const [text, setText] = useState("");

  function handleInputChange(e) {
    setText(e.target.value);
  }

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className=" bg-white shadow-md rounded-lg p-8 w-96">
        <h1 className="text-2xl font-bold mb-4 text-center text-gray-800">
          Second Component
        </h1>
        <input
          type="text"
          placeholder="Enter text"
          value={text}
          onChange={handleInputChange}
          className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <p className="text-gray-700 text-lg">
          {text ? `You typed: ${text}` : "Start typing..."}
        </p>
      </div>
    </div>
  );
};

export default Second;
