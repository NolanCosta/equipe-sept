import React, { useEffect, useState } from "react";
import LogoTsunami from "../../assets/images/tsunami/Tsunami1.webp";
import "./cardTheme.css";

function CardTheme({ title, name, onClick }) {
  const [backgroundImage, setBackgroundImage] = useState("");

  const getImage = () => {
    switch (name) {
      case "tsu":
        setBackgroundImage(LogoTsunami);
        break;
      case "tdt":
        setBackgroundImage(LogoTsunami);
        break;
      case "innon":
        setBackgroundImage(LogoTsunami);
        break;
      default:
        setBackgroundImage("");
        break;
    }
  };

  useEffect(() => {
    getImage();
  }, [title]);

  return (
    <>
      <div className="w-[30%] h-[45%] flex flex-col gap-3 text-[#B1B18D]">
        <h1>{title}</h1>
        <div
          className="w-full h-full bg-cover bg-center rounded-xl cursor-pointer card-story"
          style={{
            backgroundImage: `url(${backgroundImage})`,
          }}
          onClick={onClick}
        ></div>
      </div>
    </>
  );
}

export default CardTheme;
