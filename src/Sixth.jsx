import React, { useState } from "react";

const Sixth = () => {
  let [color, setColor] = useState(`rgb(255, 255, 255)`);

  function ChangeColor() {
    let value1 = Math.floor(Math.random() * 256);
    let value2 = Math.floor(Math.random() * 256);
    let value3 = Math.floor(Math.random() * 256);
    setColor(`rgb(${value1}, ${value2}, ${value3})`);
  }

  return (
    <div
      className="flex items-center justify-center h-screen"
      style={{ backgroundColor: color }}>
      <button
        onClick={ChangeColor}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition duration-300">
        Click Here To Change the Color
      </button>
    </div>
  );
};

export default Sixth;
