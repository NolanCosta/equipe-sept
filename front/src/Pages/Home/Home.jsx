import React from "react";
import "./home.css";
import CardTheme from "../../Components/Cards/CardTheme";
import ProgressBar from "../../Components/ProgressBar/ProgressBar";

function Home() {
  return (
    <>
      <main className="w-full h-[calc(100vh-78px-4rem)]">
        <ProgressBar />
        <div className="w-full h-full flex flex-row justify-between items-center">
          <CardTheme title="Tsunami" />
          <CardTheme title="Tremblement de terre" />
          <CardTheme title="Innondation" />
        </div>
      </main>
    </>
  );
}

export default Home;
