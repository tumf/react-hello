import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  var title = "Hello CodeSandbox";

  return (
    <div className="App">
      <p>{Math.random()}</p>
      <h1>{title}</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
