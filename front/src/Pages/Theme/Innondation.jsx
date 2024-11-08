import React from "react";
import CardTheme from "../../Components/Cards/CardTheme";
import { useNavigate } from "react-router-dom";

function Innondation() {
  const navigate = useNavigate();
  
  return (
    <>
      <div className="pt-20">
        <h1 className="text-[#b1b18d]">Innondation</h1>
        <p className = "text-2xl text-[#b1b18d]">Une inondation, c'est quand il y a de fortes pluies ou quand trop d'eau déborde des rivières<br/> ou de la mer et recouvre la terre,
        Les rues et parfois les maisons.</p>
        <div className="w-full h-[calc(100vh-78px-4rem)] flex flex-row justify-around items-center">
          <CardTheme title="MAISON" name="maison" onClick={() => navigate("/innondation/maison")} />
          <CardTheme title="EXTÉRIEUR" name="ext" onClick={() => navigate("/innondation/exterieur")} />
        </div>
      </div>
    </>
  );
}

export default Innondation; 