import './App.css';
import { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div className="App">
      <header className="App-header">
        <div id="Draw-counter">You have drawn {count} times</div>
        <div id="Draw-text">Draw a card!</div>
        <DrawButton onClick={handleClick} />
      </header>
    </div>
  );
}

function DrawButton({ onClick }) {
  return (
    <button onClick={onClick}>
      Draw
    </button>
  );
}
