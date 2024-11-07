import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import Tsunami from "./Pages/Theme/Tsunami";
import Tremblement from "./Pages/Theme/Tremblement";
import Innondation from "./Pages/Theme/Innondation";

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
      path: "/tremblement",
      element: <Tremblement />,
    },
    {
      path: "/innondation",
      element: <Innondation />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
