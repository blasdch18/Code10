//import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";

function App() {
  function saludar() {
    console.log("Hola Mundo");
  }
  return (
    <div>
      <Header />
      <h1>Este es mi primer Componente</h1>
      <div>
        <h2> div hijo</h2>
        <button onClick={saludar}>Mostrar Mesanje de Saludo</button>
      </div>
    </div>
    
 
  );
}

export default App;
