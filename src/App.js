import logo from "./assets/investment-calculator-logo.png";
import Header from "./components/Header/Header";
import InputForm from "./components/Form/InputForm";
import Results from "./components/Results/Results";

function App() {

  return (
    <div>
      <Header logo={logo} />
      <InputForm />
      <Results/>
    </div>
  );
}

export default App;
