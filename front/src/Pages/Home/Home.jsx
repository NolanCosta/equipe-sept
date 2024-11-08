import React from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";
import CardTheme from "../../Components/Cards/CardTheme";

function Home() {

  const navigate = useNavigate();

  return (
    <>
    <div className="title" >
          <h1>Alert 4 Sud</h1>
    <p><br/>Plonge dans des aventures captivantes et découvre, <br/>
    en famille, comment réagir face aux catastrophes naturelles ! <br/>
    Avec nos histoires interactives adaptés aux 6-11 ans, <br/>
    apprendre devient un jeu où chaque choix compte !<br/></p>
    </div>

      <div className="w-full h-[calc(100vh-78px-4rem)] flex flex-row justify-between items-center">
        <CardTheme title="Tsunami" name="tsu" onClick={() => navigate("/tsunami")} />
        <CardTheme title="Seisme" name="tdt" onClick={() => navigate("/tremblement")} />
        <CardTheme title="Innondation" name="innon" onClick={() => navigate("/innondation")} />
      </div>
      <p class="col-12 footer text-center tm-copyright-text">
            Copyright &copy; 2024 App Alert4sud. 
            By Equipe 7
          </p>
    </>
  );
}

export default Home;
