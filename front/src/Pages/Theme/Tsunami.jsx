import React from "react";
import CardTheme from "../../Components/Cards/CardTheme";
import { useNavigate } from "react-router-dom";

function Tsunami() {

  const navigate = useNavigate();
  
  return (
    <>
      <div className="pt-20">
        <h1 className="text-[#b1b18d]">Tsunami</h1>
        <p className = "text-2xl text-[#b1b18d]">Un tsunami, c'est d'immenses vagues qui se forment après un tremblement de terre sous l'eau<br/> et qui peuvent inonder les plages et les villes. Les vagues d'un tsunami peuvent être d'une hauteur de 60 mètres ou plus,<br/> soit la hauteur d'un bâtiment de dix étages.</p>
        <div className="w-full h-[calc(100vh-78px-4rem)] flex flex-row justify-around items-center">
          <CardTheme title="MAISON" onClick={() => navigate("/tsunami/maison")} />
          <CardTheme title="EXTÉRIEUR" onClick={() => navigate("/tsunami/exterieur")} />
        </div>
      </div>
    </>
  );
}

export default Tsunami;