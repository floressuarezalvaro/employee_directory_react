import React, { useEffect } from "react";
import "./App.css";
import axios from "axios";
import Navbar from "./components/Nav/Navbar";
import Search from "./pages/search";
import Card from "./components/Card/Card";
import Button from "./components/Button/Button";

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
      <h1>Hello World - First REACT app</h1>
      <Search />
      <Button />
      <Card />
    </div>
  );
}
export default App;
