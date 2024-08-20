import React, { useState } from "react";

const Fifth = () => {
  let [button, setbutton] = useState("Click here To Visible the Text");
  let [display, setdisplay] = useState("none");

  function buttontext() {
    if (display === "none") {
      setdisplay("block");
      setbutton("Click here to Hide the Text");
    } else {
      setdisplay("none");
      setbutton("Click here to Visible the Text");
    }
  }

  return (
    <div className="flex flex-col  items-center justify-center bg-gray-100 p-6 h-screen">
      <button
        onClick={buttontext}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition duration-300">
        {button}
      </button>
      <p
        style={{ display: display }}
        className="mt-4 p-4 bg-white border border-gray-300 rounded-lg shadow-md text-gray-700">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ab,
        maxime odio itaque natus exercitationem adipisci facere nisi omnis
        laudantium asperiores esse ducimus, laboriosam earum molestiae
        cupiditate doloribus nobis nulla?
      </p>
    </div>
  );
};

export default Fifth;
