import React, { useState } from 'react'
import './App.css'    
const App = () => {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput("");
  }

  const handleDelete = () => {
    setInput((prev) => prev.slice(0, -1));
  }

  const handleCalculate = () => {
    try {
      const result = Function(`"use strict"; return (${input})`)();
      setInput(result.toString());
    } catch {
      setInput("Error");
    }
  };


  return (
    <div className="calculator-container">
      <div className="calculator">
        <div className="display">{input || "0"}</div>
        
        <div className="buttons">
          <div className="controlBtn" onClick={handleClear}>C</div>
          <div className="controlBtn" onClick={handleDelete}>DEL</div>
          <div className="operatorBtn" onClick={() => handleClick('%')}>%</div>
          <div className="operatorBtn" onClick={() => handleClick('/')}>/</div>

          <div className="btn" onClick={() => handleClick('7')}>7</div>
          <div className="btn" onClick={() => handleClick('8')}>8</div>
          <div className="btn" onClick={() => handleClick('9')}>9</div>
          <div className="operatorBtn" onClick={() => handleClick('*')}>*</div>

          <div className="btn" onClick={() => handleClick('4')}>4</div>
          <div className="btn" onClick={() => handleClick('5')}>5</div>
          <div className="btn" onClick={() => handleClick('6')}>6</div>
          <div className="operatorBtn" onClick={() => handleClick('-')}>-</div>

          <div className="btn" onClick={() => handleClick('1')}>1</div>
          <div className="btn" onClick={() => handleClick('2')}>2</div>
          <div className="btn" onClick={() => handleClick('3')}>3</div>
          <div className="operatorBtn" onClick={() => handleClick('+')}>+</div>

          <div className="zeroBtn" onClick={() => handleClick('0')}>0</div>
          <div className="btn" onClick={() => handleClick('.')}>.</div>
          <div className="equalBtn" onClick={handleCalculate}>=</div>
        </div>
      </div>
    </div>
  )
}
export default App
