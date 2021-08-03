import './App.css';
import ItemListContainer from './componentes/CarruselProductos/ItemListContainer';
import NavBar from './componentes/Navbar/NavBar.js';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Container">
          <NavBar/>
          <ItemListContainer greeting="Tienda de Cuadernos Artesanales" />
          
        </div>
      </header>
    </div>
  );
}

export default App;
