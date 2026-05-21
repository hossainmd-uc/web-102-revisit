import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  const [offset, setOffset] = useState(1);

  const [doubleStuffed, setDoubleStuffed] = useState(false);
  const [partyPack, setPartyPack] = useState(false);
  const [fullFeast, setFullFeast] = useState(false);

  const updateCount = () => {
    setCounter((curr) => curr + offset);
  };

  const doubleStuffedUpgrade = () => {
    if (!doubleStuffed && counter >= 10) {
      setDoubleStuffed(true);
      setCounter((prev) => prev - 10);
      setOffset(2);
    }
  };

  const partyPackUpgrade = () => {
    if (!partyPack && counter >= 100) {
      setPartyPack(true);
      setCounter((prev) => prev - 100);
      setOffset(5);
    }
  };

  const fullFeastUpgrade = () => {
    if (!fullFeast && counter >= 1000) {
      setFullFeast(true);
      setCounter((prev) => prev - 1000);
      setOffset(10);
    }
  };

  return (
    <>
      <div className="App">
        <div className="header">
          <h1>Samosa Selector</h1>
          <h2>Count: {counter}</h2>
          <img className="samosa" src="samosa.png" onClick={updateCount}></img>
        </div>
        <div className="container">
          <div className="upgrade">
            <h3>Double Stuffed 🥟</h3>
            <p>2x per click</p>
            <button onClick={doubleStuffedUpgrade}>10 samosas</button>
          </div>
          <div className="upgrade">
            <h3>Party Pack 🎉</h3>
            <p>5x per click</p>
            <button onClick={partyPackUpgrade}>100 samosas</button>
          </div>
          <div className="upgrade">
            <h3>Full Feast 🍖</h3>
            <p>10x per click</p>
            <button onClick={fullFeastUpgrade}>1000 samosas</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
