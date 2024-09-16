import { useState } from 'react';
import './App.css';

function App() {
  // Estado para el contador
  const [count, setCount] = useState(0);

  // Función para incrementar el contador
  const increment = () => {
    setCount(count + 1);
  };

  // Función para decrementar el contador
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="App">
      <h1>Contador: {count}</h1>
      <button onClick={increment}>Incrementar</button>
      <button onClick={decrement}>Decrementar</button>
    </div>
  );
}

export default App;
