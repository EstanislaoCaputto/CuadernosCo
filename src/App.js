import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          ¡Cuadernos artesanale!
        </p>
        <a
          className="App-link"
          href="https://www.instagram.com/eclipsamesta/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Nuestro IG
        </a>
      </header>
    </div>
  );
}

export default App;
