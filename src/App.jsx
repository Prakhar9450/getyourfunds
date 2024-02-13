import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

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
          <input type="checkbox" />
        </div>

        <div className="passLength">
          <label>Include Lowercase Letters</label>
          <input type="checkbox" />
        </div>

        <div className="passLength">
          <label>Include Numbers</label>
          <input type="checkbox" />
        </div>

        <div className="passLength">
          <label>Include Special Characters</label>
          <input type="checkbox" />
        </div>

        <button className="btn">Generate Password</button>
      </div>
    </>
  );
}

export default App;
