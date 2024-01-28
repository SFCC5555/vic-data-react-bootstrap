import { StateBar } from "./components/StateBar";
import { Calculator } from "./components/Calculator";

function App() {
  return (
    <section className="main-container d-flex flex-column justify-content-between h-100 w-100 bg-black">
      <StateBar />
      <Calculator />
    </section>
  );
}

export default App;
