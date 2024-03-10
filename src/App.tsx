import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log("Gago");
  }, []);

  return <div className="hehe">gago</div>;
}

export default App;
