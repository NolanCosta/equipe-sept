import React from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";
import CardTheme from "../../Components/Cards/CardTheme";

function Home() {

  const navigate = useNavigate();

  return (
    <>
      <div className="w-full h-[calc(100vh-78px-4rem)] flex flex-row justify-between items-center">
        <CardTheme title="Tsunami" name="tsu" onClick={() => navigate("/tsunami")} />
        <CardTheme title="Seisme" name="tdt" onClick={() => navigate("/tremblement")} />
        <CardTheme title="Innondation" name="innon" onClick={() => navigate("/innondation")} />
      </div>
    </>
  );
}

export default Home;
