import React, { useState } from 'react';
import Button from './button';

import './calculator.css';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = (val) => {
    setInput((prevInput) => prevInput + val);
  };

  const handleCalculate = () => {
    setResult(eval(input).toString());
  };

  const clearInput = () => {
    setInput('');
    setResult('');
  };

  const deleteLast = () => {
    setInput(input.slice(0, -1));
  };

  return (
    <div className="calculator">
      <div className="display">
        <input type="text" value={input} readOnly />
      </div>
      <div className="result">
        <p>output: {result}</p>
      </div>
      <div className="buttons">
        <Button
          handleButtonClick={handleButtonClick}
          handleCalculate={handleCalculate}
          clearInput={clearInput}
          deleteLast={deleteLast}
        />
      </div>
    </div>
  );
};

export default Calculator;