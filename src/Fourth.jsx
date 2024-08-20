import React, { useState } from "react";

const Fourth = () => {

  const [color, setColor] = useState("white");
  const [textcolor, setTextColor] = useState("black");

  function changeColor(newColor) {
    setTextColor("white");
    setColor(newColor);
  }

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div
        className=" bg-white p-8 shadow-md rounded-lg"
        style={{ backgroundColor: color }}>
        <h1
          className="text-2xl font-bold mb-4 text-center text-gray-800"
          style={{ color: textcolor }}>
          Fourth Component
        </h1>
        <div className="flex justify-center space-x-4">
          <button
            onClick={() => changeColor("red")}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
            Red
          </button>
          <button
            onClick={() => changeColor("green")}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
            Green
          </button>
          <button
            onClick={() => changeColor("blue")}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Blue
          </button>
          <button
            onClick={() => changeColor("yellow")}
            className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">
            Yellow
          </button>
        </div>
      </div>
    </div>
  );
};

export default Fourth;
