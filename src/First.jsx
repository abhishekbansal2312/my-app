import React, { useState } from "react";

const First = () => {
  const [num, setNum] = useState(0);

  const changeNum = () => {
    setNum(num + 1);
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className=" bg-white shadow-md rounded-lg p-8 w-96 text-center">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">
          First Component
        </h1>
        <p className="text-4xl font-semibold mb-4 text-gray-700">{num}</p>
        <button
          className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          onClick={changeNum}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default First;
