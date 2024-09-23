import { useState } from 'react';
import './App.css';
import Button from './components/Button';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="App">
      <h1>Contador: {count}</h1>
      <Button onClick={increment} label="Incrementar" />
      <Button onClick={decrement} label="Decrementar" />
    </div>
  );
}

export default App;
