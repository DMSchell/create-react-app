import logo from './logo.svg';
import './App.css';

function MyButton() {
  return (
    <button>
      click
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
