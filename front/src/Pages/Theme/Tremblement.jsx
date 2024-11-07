import React from "react";
import CardTheme from "../../Components/Cards/CardTheme";
import { useNavigate } from "react-router-dom";

function Tremblement() {
  const navigate = useNavigate();
  
  return (
    <>
      <div className="pt-20">
        <h1 className="text-[#B1B18D]">Tremblement</h1>
        <p>Un tremblement de terre est quand le sol tremble ou bouge très fort à cause de mouvements sous la terre, et cela peut casser des bâtiments et créer des fissures.</p>
        <div className="w-full h-[calc(100vh-78px-4rem)] flex flex-row justify-around items-center">
          <CardTheme title="MAISON" onClick={() => navigate("/tremblement/maison")} />
          <CardTheme title="EXTÉRIEUR" onClick={() => navigate("/tremblement/exterieur")} />
        </div>
      </div>
    </>
  );
}

export default Tremblement;