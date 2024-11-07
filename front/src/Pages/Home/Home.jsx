import React from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";
import CardTheme from "../../Components/Cards/CardTheme";

function Home() {

  const navigate = useNavigate();

  return (
    <>
      <div className="w-full h-[calc(100vh-78px-4rem)] flex flex-row justify-between items-center">
        <CardTheme title="Tsunami" onClick={() => navigate("/tsunami")} />
        <CardTheme title="Tremblement de terre" onClick={() => navigate("/tremblement")} />
        <CardTheme title="Innondation" onClick={() => navigate("/innondation")} />
      </div>
    </>
  );
}

export default Home;
