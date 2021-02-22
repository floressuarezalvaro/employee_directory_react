import React, { useEffect } from "react";
import "./App.css";
import axios from "axios";
// import HelloDiv from "./components/HelloDiv";
function App() {
  useEffect(() => {
    axios
      .get("/example")
      .then((response) => console.log(console.log("axios success")))
      .catch((err) => console.log(err));
  });
  return (
    // <HelloDiv />
    <div className="App">
      <h1>Hello World - FIrst REACT app</h1>
    </div>
  );
}
export default App;
