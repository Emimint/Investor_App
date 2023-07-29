import React, { useState } from "react";
import logo from "./assets/investment-calculator-logo.png";
import Header from "./components/Header/Header";
import InputForm from "./components/Form/InputForm";
import Results from "./components/Results/Results";

function App() {
  const [currentResults, setResults] = useState([]);
  const [isVisible, setVisibility] = useState(false);

  const showResultHandler = (results) => {
    setResults(results);
    setVisibility(true);
  };

  return (
    <div>
      <Header logo={logo} />
      <InputForm
        onCreateResult={showResultHandler}
        onResetView={setVisibility}
      />
      {isVisible ? <Results data={currentResults} /> : <p>Nothing to show.</p>}
    </div>
  );
}

export default App;
