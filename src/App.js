import './App.css';
import ItemListContainer from './componentes/ListaDeProductos/ItemListContainer';
import NavBar from './componentes/Navbar/NavBar.js';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Container">
          <NavBar/>
          <div className="row">

            <ItemListContainer />
          </div>
          
        </div>
      </header>
    </div>
  );
}

export default App;
