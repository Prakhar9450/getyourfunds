import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [uppercase, setUppercase] = useState(false);
  let [lowercase, setLowercase] = useState(false);
  let [number, setNumber] = useState(false);
  let [specialCharacter, setSpecialCharacter] = useState(false);

  return (
    <>
      <div className="passwordBox">
        <h2>Password Generator</h2>

        <div className="passwordBoxIn">
          <input type="text" readOnly /> <button>Copy</button>
        </div>

        <div className="passLength">
          <label>Password Length</label>
          <input type="number" max="20" />
        </div>

        <div className="passLength">
          <label>Include Uppercase Letters</label>
          <input
            type="checkbox"
            checked={uppercase}
            onChange={() => {
              setUppercase(!uppercase);
            }}
          />
        </div>

        <div className="passLength">
          <label>Include Lowercase Letters</label>
          <input
            type="checkbox"
            checked={lowercase}
            onChange={() => {
              setLowercase(!lowercase);
            }}
          />
        </div>

        <div className="passLength">
          <label>Include Numbers</label>
          <input
            type="checkbox"
            checked={number}
            onChange={() => {
              setNumber(!number);
            }}
          />
        </div>

        <div className="passLength">
          <label>Include Special Characters</label>
          <input
            type="checkbox"
            checked={specialCharacter}
            onChange={() => {
              setSpecialCharacter(!specialCharacter);
            }}
          />
        </div>

        <button className="btn">Generate Password</button>
      </div>
    </>
  );
}

export default App;
