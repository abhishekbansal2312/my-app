import React, { useState } from "react";

const LikeButton = () => {
  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div
      className={`h-screen flex flex-col items-center min-h-screen justify-center ${
        isLiked ? "bg-gray-800 text-white" : "bg-white text-black"
      }`}>
      <img
        onClick={toggleLike}
        src={isLiked ? "/liked.png" : "/unlike.png"}
        alt={isLiked ? "Liked" : "Unliked"}
        className="w-16 h-16 cursor-pointer transition-transform transform hover:scale-110"
      />
    </div>
  );
};

export default LikeButton;
