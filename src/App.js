// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';

import { convertNumber } from './modules/convert';

function App() {

  const [binState, setBinState] = useState("no bin")
  const [decimal, setDecimal] = useState(" ")
  const [message, setMessage] = useState("")

  var i = 0

  const success = () => {
    
    setDecimal(convertNumber(binState, binState.length) === -1 ? 0 : convertNumber(binState, binState.length))
    setMessage("") 

  }

  const erro = () => {
 
    if (i === 0) {
      setMessage("Número digitado inválido")
      setDecimal("")
      i += 1
    } else {
      setMessage("Número digitado inválido")
      setDecimal("")
      alert(message)
    }

  }

  return (
    <div className="Container">

      <div
        className="TextContainer"
      >
        <p
          className="Text"
        >Digite um valor em binário, com no máximo 8 digitos: { decimal } <br /></p>

        <p 
          className="Text"
        >{message}</p>
      </div>

      <div 
        className="InputBoxContainer"
      >
        <input 
          className="InputBox"
          placeholder="Digite o valor em binário..."
          type="text"
          maxLength="8"
          onChange={(value) => { setBinState(value.target.value) }}
        />
      </div>

      <div
        className="ButtonBoxContainer"
      >
        <button
          className="ButtonBox"
          onClick={() => { 
            convertNumber(binState, binState.length) ? success() : erro()
          }}
        >Converter</button>
      </div>

    </div>
  );
}

export default App;
