import React from "react";
import "../styling/Main.css";
import Sidebar from "../components/Sidebar";
import Visuals from "./Visuals";

function Home() {
  return (
    <div className="home">
      <Sidebar />
      <Visuals />
    </div>
  );
}

export default Home;
