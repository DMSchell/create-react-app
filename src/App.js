import logo from './logo.svg';
import './App.css';

function makeButton() {
  return (
    <button>
      click
    </button>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> hi </h1>
        <makeButton />
      </header>
    </div>
  );
}

export default App;
