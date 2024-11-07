import React from "react";
import "./cardStory.css";

function CardStory({ title }) {
  return (
    <div className="w-[30%] h-[40%] bg-white border-2 border-[#B1B18D] text-[#B1B18D] rounded-xl cursor-pointer card-story">
      <h1>{title}</h1>
    </div>
  );
}

export default CardStory;
