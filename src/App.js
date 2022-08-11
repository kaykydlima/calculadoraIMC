import "./App.css"
import FormPeso from "./Components/FormPeso";
import Titulo from "./Components/Titulo";


export default function App() {
  return (
    <div className="app">
      <Titulo/>
      <div className="areaDados">
        <FormPeso/>
      </div>
    </div>
  );
}


