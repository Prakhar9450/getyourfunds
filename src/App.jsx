import { useState } from "react";
import "./App.css";
import { LC, NC, SC, UC } from "./data/PassChar";

function App() {
  let [uppercase, setUppercase] = useState(false);
  let [lowercase, setLowercase] = useState(false);
  let [number, setNumber] = useState(false);
  let [specialCharacter, setSpecialCharacter] = useState(false);
  let [passwordLength, setPasswordLength] = useState(8);
  let [fPass, setfPass] = useState("");
  let [copyButtonText, setCopyButtonText] = useState("Copy");

  let createPassword = () => {
    let charSet = "";
    let finalPass = "";
    if (uppercase || lowercase || number || specialCharacter) {
      if (uppercase) charSet += UC;
      if (lowercase) charSet += LC;
      if (number) charSet += NC;
      if (specialCharacter) charSet += SC;

      for (let i = 0; i <= passwordLength; i++) {
        finalPass += charSet.charAt(Math.floor(Math.random() * charSet.length));
      }

      setfPass(finalPass);
      setCopyButtonText("Copy");
    } else {
      alert("Please Select atleast one Checkbox.....");
    }
  };

  let copyPass = () => {
    navigator.clipboard.writeText(fPass);
    setCopyButtonText("Copied✓");
  };

  return (
    <>
      <div className="passwordBox">
        <h2>Random Password Generator</h2>

        <div className="passwordBoxIn">
          <input type="text" readOnly value={fPass} />
          <button onClick={copyPass}>{copyButtonText}</button>
        </div>

        <div className="passLength">
          <label>Password Length</label>
          <input
            type="number"
            max={20}
            min={6}
            value={passwordLength}
            onChange={(e) => setPasswordLength(e.target.value)}
          />
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

        <button className="btn" onClick={createPassword}>
          Generate Password
        </button>
      </div>
    </>
  );
}

export default App;
