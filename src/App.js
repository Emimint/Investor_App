import React, { useState } from "react";
import logo from "./assets/investment-calculator-logo.png";
import Header from "./components/Header/Header";
import InputForm from "./components/Form/InputForm";
import Results from "./components/Results/Results";

function App() {
  const [currentResults, setResults] = useState([]);

  const showResultHandler = (results) => {
    setResults(results);
  };

  return (
    <div>
      <Header logo={logo} />
      <InputForm onCreateResult={showResultHandler} />
      <Results data={currentResults} />
    </div>
  );
}

export default App;
