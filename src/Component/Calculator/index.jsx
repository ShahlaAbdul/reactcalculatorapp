import React, { useState } from 'react';
import './style.css';

function Calculator() {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [result, setResult] = useState("");


    function add() {
         if (isNaN(num1) || isNaN(num2)) {
         setResult("yalnis data tipi");
         }
         else {
         let sum = num1 + num2;
         return setResult(sum);
    }
    }
    
    function substrict() {
        if (isNaN(num1) || isNaN(num2)) {
         setResult("yalnis data tipi");
         }
         else {
         let sum = num1 -num2;
         return setResult(sum);
        }    
    }
    function multiple() {
        if (isNaN(num1) || isNaN(num2)) {
         setResult("yalnis data tipi");
         }
         else {
         let sum = num1 *num2;
         return setResult(sum);
        }
    }

    function bolme() {
    if (isNaN(num1) || isNaN(num2)) {
      setResult("yalnis data");
    }
    else {
      if (num2 == 0) {
        setResult("0a bolme mumkun deyil");
      } else {
        let sum = num1 / num2;
        return setResult(sum);
      }
    }
  }
    return (

        <div className='calculator_app'>
            <div className='input'>
                <input type="text" placeholder='enter the first number' onChange={(e) => setNum1(parseInt(e.target.value))} />
                <input type="text" placeholder='enter the first number' onChange={(e) => setNum2(parseInt(e.target.value))} />
            </div>
            <div className='buttons'>
                <button onClick={add}>add(+)</button>
                <button onClick={substrict}>sub(-)</button>
                <button onClick={multiple}>mul(*)</button>
                <button onClick={bolme}>bolme(+)</button>
            </div>
            <div className='result'>
                <h4>{ result}</h4>
            </div>
            
    </div>

   
  );
      

}

export default Calculator;
