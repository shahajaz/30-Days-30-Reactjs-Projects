import React from 'react'
import './App.css'    
const App = () => {
  return (
    <div className="calculator-container">
      <div className="calculator">
        <div className="display">0</div>
        
        <div className="buttons">
          <div className="controlBtn">C</div>
          <div className="controlBtn">DEL</div>
          <div className="operatorBtn">%</div>
          <div className="operatorBtn">/</div>

          <div className="btn">7</div>
          <div className="btn">8</div>
          <div className="btn">9</div>
          <div className="operatorBtn">*</div>

          <div className="btn">4</div>
          <div className="btn">5</div>
          <div className="btn">6</div>
          <div className="operatorBtn">-</div>

          <div className="btn">1</div>
          <div className="btn">2</div>
          <div className="btn">3</div>
          <div className="operatorBtn">+</div>

          <div className="btn">0</div>
          <div className="btn">.</div>
        </div>
      </div>
    </div>
  )
}

export default App
