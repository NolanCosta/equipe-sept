import React from "react";
import "./home.css";
import CardTheme from "../../Components/Cards/CardTheme";

function Home() {
  return (
    <>
      <div className="w-full h-[calc(100vh-78px-4rem)] flex flex-row justify-between items-center">
        <CardTheme title="Tsunami" />
        <CardTheme title="Tremblement de terre" />
        <CardTheme title="Innondation" />
      </div>
    </>
  );
}

export default Home;
