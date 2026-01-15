import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("#0099ff");

  const generateRandomColor = () => {
    const randomColor =
      "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    setColor(randomColor);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(color);
    alert("Color copied to clipboard!");
  };

  return (
    <div className="container" style={{ backgroundColor: color }}>
      <div className="card">
        <h1>Random Color Generator</h1>
        <p className="color-code">{color}</p>

        <div className="buttons">
          <button onClick={generateRandomColor}>Generate Color</button>
          <button onClick={copyToClipboard} className="copy">
            Copy Color
          </button>
        </div>
      </div>
    </div>
  );
}
export default App;
