import React from "react";
import CardTheme from "../../Components/Cards/CardTheme";
import { useNavigate } from "react-router-dom";

function Tremblement() {
  const navigate = useNavigate();
  
  return (
    <>
      <div className="pt-20">
        <h1 className="text-[#b1b18d]">Séisme</h1>
        <p className = "text-2xl text-[#b1b18d]">Un séisme, c’est quand la Terre tremble parce que des morceaux sous le sol bougent et se frottent,<br/>cela peut détruires des bâtiments et créer des fissures.</p>
        <div className="w-full h-[calc(100vh-78px-4rem)] flex flex-row justify-around items-center">
          <CardTheme title="MAISON" name="maison" onClick={() => navigate("/tremblement/maison")} />
          <CardTheme title="EXTÉRIEUR" name="ext" onClick={() => navigate("/tremblement/exterieur")} />
        </div>
      </div>
    </>
  );
}

export default Tremblement;