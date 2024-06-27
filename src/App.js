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
        <h1>Drawing</h1>
        <h1>You have drawn {count} times</h1>
        <MyButton onClick={handleClick} />
      </header>
    </div>
  );
}

function MyButton({ count, onClick }) {
  return (
    <button onClick={onClick}>
      Draw
    </button>
  );
}
