import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  const [calc, setCalc] = useState("")
  const [result, setResult] = useState("");

  const ops = ['/', '*', '+', '-', '.']

  const updateCalc = value => {
    if(
      ops.includes(value) && calc === "" || 
      ops.includes(value) && ops.includes(calc.slice(-1))
    ) {
      return;
    }
      setCalc(calc + value);

    if (!ops.includes(value)) {
      setResult(eval(calc + value).toString());
    }
  }

  const createDigits = () => {
     const digits = [];
    for (let i = 1; i < 10; i++) {
      digits.push(
        <button className="fw-bold p-2 mb-2" onClick={() => updateCalc(i.toString())} key={i}>{i}</button>
      )
    }

    return digits;
    
  }

  const calculate = () => {
    setCalc(eval(calc).toString());
  }

  const clear = () => {
    setCalc("")
  }
  

  const deleteLast = () => {
    if (calc == '') {
      return;
    }

    const value = calc.slice(0, -1);

    setCalc(value)
  }
  
  return (
    <div className="container text-center bg-dark p-3 mt-4 rounded">
     <div className="calculator">
       <div className="display bg-white p-2 align-items-center rounded">
         {result ? <span className="">({result})</span> : ''}&nbsp; { calc || "0"}
       </div>
       <div className="operators mt-3">
       <button className="fw-bold p-2" onClick={() => updateCalc('/')}>/</button>
       <button className="fw-bold p-2" onClick={() => updateCalc('*')}>*</button>
       <button className="fw-bold p-2" onClick={() => updateCalc('+')}>+</button>
       <button className="fw-bold p-2" onClick={() => updateCalc('-')}>-</button>
         
       <button className="fw-bold p-2" onClick={deleteLast}>DEL</button>
       <button className="fw-bold p-2" onClick={clear}>Clear</button>
      </div>
       <div className="digits">
         { createDigits() }
       <button className="fw-bold p-2" onClick={() => updateCalc('0')}>0</button>
       <button className="fw-bold p-2" onClick={() => updateCalc('.')}>.</button>
         
       <button className="fw-bold p-2" onClick={calculate}>=</button>
      </div>
     </div>
    </div>
  )
}
