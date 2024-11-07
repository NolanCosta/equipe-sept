import React from "react";
import CardTheme from "../../Components/Cards/CardTheme";
import { useNavigate } from "react-router-dom";

function Innondation() {
  const navigate = useNavigate();
  
  return (
    <>
      <div className="pt-20">
        <h1 className="text-[#B1B18D]">Innondation</h1>
        <p>Une inondation est quand il y a trop d'eau qui déborde des rivières ou de la mer et recouvre la terre, les rues et parfois les maisons.</p>
        <div className="w-full h-[calc(100vh-78px-4rem)] flex flex-row justify-around items-center">
          <CardTheme title="MAISON" onClick={() => navigate("/innondation/maison")} />
          <CardTheme title="EXTÉRIEUR" onClick={() => navigate("/innondation/exterieur")} />
        </div>
      </div>
    </>
  );
}

export default Innondation;