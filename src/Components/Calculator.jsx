import React from 'react'

import { useState } from 'react'; 
function Calculator() 
{
    const [input, setInput] = useState(''); 
    const handleClick = (value) => {
        setInput((prevInput) => prevInput + value);
      };
    
      const handleClear = () => {
        setInput('');
      };
    
      const handleEvaluate = () => {
        try {
          
          setInput(eval(input).toString());
        } catch (error) {
          setInput('Error');
        }
      };
  return (
    <div className="calculator">
    <div className="display">
      <input
        type="text"
        value={input}
        readOnly
        className="input-field"
      />
    </div>
    <div className="buttons">
      <button onClick={() => handleClick('1')}>1</button>
      <button onClick={() => handleClick('2')}>2</button>
      <button onClick={() => handleClick('3')}>3</button>
      <button onClick={() => handleClick('+')}>+</button>

      <button onClick={() => handleClick('4')}>4</button>
      <button onClick={() => handleClick('5')}>5</button>
      <button onClick={() => handleClick('6')}>6</button>
      <button onClick={() => handleClick('-')}>-</button>

      <button onClick={() => handleClick('7')}>7</button>
      <button onClick={() => handleClick('8')}>8</button>
      <button onClick={() => handleClick('9')}>9</button>
      <button onClick={() => handleClick('*')}>*</button>

      <button onClick={() => handleClick('0')}>0</button>
      <button onClick={() => handleClick('.')}>.</button>
      <button onClick={handleClear}>C</button>
      <button onClick={() => handleClick('/')}>/</button>

      <button className="equal" onClick={handleEvaluate}>=</button>
    </div>
  </div>
  )
}

export default Calculator
