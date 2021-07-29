import './App.css';
import ItemList1 from './componentes/CarruselProductos/ItemList1';
import NavBar from './componentes/Navbar/NavBar.js';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Container">
          <NavBar/>
          <ItemList1 />
          
        </div>
      </header>
    </div>
  );
}

export default App;
