import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import Tsunami from "./Pages/Theme/Tsunami";
import Tremblement from "./Pages/Theme/Tremblement";
import Innondation from "./Pages/Theme/Innondation";
import TsunamiMaison from "./Pages/Soustheme/TsunamiMaison";
import TsunamiExterieur from "./Pages/Soustheme/TsunamiExterieur";
import InnondationMaison from "./Pages/Soustheme/InnondationMaison";
import InnondationExterieur from "./Pages/Soustheme/InnondationExterieur";
import TremblementMaison from "./Pages/Soustheme/TremblementMaison";
import TremblementExterieur from "./Pages/Soustheme/TremblementExterieur";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/tsunami",
      element: <Tsunami />,
    },
    {
      path: "/tsunami/maison",
      element: <TsunamiMaison />
    },
    {
      path: "tsunami/exterieur",
      element: <TsunamiExterieur />
    },
    {
      path: "/tremblement",
      element: <Tremblement />,
    },
    {
      path: "/tremblement/maison",
      element: <TremblementMaison />
    },
    {
      path: "tremblement/exterieur",
      element: <TremblementExterieur />
    },
    {
      path: "/innondation",
      element: <Innondation />,
    },
    {
      path: "/innondation/maison",
      element: <InnondationMaison />
    },
    {
      path: "innondation/exterieur",
      element: <InnondationExterieur />
    }
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
