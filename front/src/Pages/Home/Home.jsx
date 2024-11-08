import React from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";
import CardTheme from "../../Components/Cards/CardTheme";

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <div className="title">
        <h1>Alert 4 Sud</h1>
        <h4>
          <br />
          Plonge dans des aventures captivantes et découvre, <br />
          en famille, comment réagir face aux catastrophes naturelles ! <br />
          Avec nos histoires interactives adaptés aux 6-11 ans, <br />
          apprendre devient un jeu où chaque choix compte !<br />
        </h4>
      </div>

      <div className="w-full h-[calc(100vh-78px-4rem)] flex flex-wrap justify-evenly items-center">
        <CardTheme
          title="Tsunami"
          name="tsu"
          onClick={() => navigate("/tsunami")}
        />
        <CardTheme
          title="Seisme"
          name="tdt"
          onClick={() => navigate("/tremblement")}
        />
        <CardTheme
          title="Innondation"
          name="innon"
          onClick={() => navigate("/innondation")}
        />
        <CardTheme
          title="Comment constituer un sac d'evacuation ?"
          name="bag"
          onClick={() => navigate("/")}
        />
        <CardTheme
          title="La sirène SNA, qu'est-ce que c'est ?"
          name="sna"
          onClick={() => navigate("/")}
        />
        <CardTheme
          title="Qu'est-ce qu'un Risque Majeur ?"
          name="risk"
          onClick={() => navigate("/")}
        />
      </div>
      <p class="col-12 footer text-center tm-copyright-text">
        Copyright &copy; 2024 App Alert4sud. By Equipe 7
      </p>
    </>
  );
}

export default Home;
