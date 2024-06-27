import './App.css';
import { useState } from 'react';

function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> hi </h1>
        <MyButton />
      </header>
    </div>
  );
}
