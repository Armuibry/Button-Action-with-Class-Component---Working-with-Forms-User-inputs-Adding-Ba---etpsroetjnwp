import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {

  const [showPara , setShowPara] = useState(false);
  const renderPara = () => {
    setShowPara(true)
  }

  return (
    <div id="main">
      { showPara && 
      <p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>
      }
      <button id="click" onClick={renderPara}>click</button>
    </div>
  );
}


export default App;
