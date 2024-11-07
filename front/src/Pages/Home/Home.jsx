import React from "react";
import "./home.css";
import CardStory from "../../Components/Cards/CardStory";

function Home() {
  return (
    <>
      <div className="w-full h-[calc(100vh-78px-4rem)] flex flex-row justify-between items-center">
        <CardStory title="Story 1" />
        <CardStory title="Story 2" />
        <CardStory title="Story 3" />
      </div>
    </>
  );
}

export default Home;
