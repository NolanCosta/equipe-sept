import React from "react";
import CardTheme from "../../Components/Cards/CardTheme";
import { useNavigate } from "react-router-dom";

function Tsunami() {

  const navigate = useNavigate();
  
  return (
    <>
      <div className="pt-20">
        <h1 className="text-[#B1B18D]">Tsunami</h1>
        <p className = "text-2xl text-black"> Un tsunami est une énorme vague de mer très puissante qui se forme après un tremblement de terre sous l'eau et qui peut inonder les plages et les villes.</p>
        <div className="w-full h-[calc(100vh-78px-4rem)] flex flex-row justify-around items-center">
          <CardTheme title="MAISON" onClick={() => navigate("/tsunami/maison")} />
          <CardTheme title="EXTÉRIEUR" onClick={() => navigate("/tsunami/exterieur")} />
        </div>
      </div>
    </>
  );
}

export default Tsunami;