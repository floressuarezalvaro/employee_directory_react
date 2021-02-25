import React, { useEffect } from "react";
import "./App.css";
import axios from "axios";
import Navbar from "./components/Nav/Navbar";

function App() {
  useEffect(() => {
    axios
      .get("/example")
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="App">
      <Navbar />
      <h1>Hello World - FIrst REACT app</h1>
    </div>
  );
}
export default App;
