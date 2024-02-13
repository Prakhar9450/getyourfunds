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
      </div>
    </>
  );
}

export default App;
