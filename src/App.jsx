import "./App.css";
import QRious from "qrious";

import { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState(null);
  return (
    <div className="appWrapper">
      <input
        placeholder="your data to generate"
        onChange={(event) => setInputValue(event.target.value)}
      />
      <canvas id="qr" />
      <button
        onClick={() => {
          new QRious({
            element: document.getElementById("qr"),
            value: inputValue,
          });
        }}
      >
        GO
      </button>
    </div>
  );
}

export default App;
