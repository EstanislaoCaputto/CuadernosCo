import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Itemdetalle from './componentes/ListaDeProductos/itemDetalle';
// import ItemDetalleContenedor from './componentes/ListaDeProductos/itemDetalleContenedor';
import ItemListContainer from './componentes/ListaDeProductos/ItemListContainer';
import NavBar from './componentes/Navbar/NavBar.js';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
        <div className="Container">
          <NavBar/>
          <Switch>
            <Route exact path="/">
          <div className="row">
            <ItemListContainer />
          </div>
          </Route>
          <Route exact path="/cuadernos-detalles/:id">
            <Itemdetalle />
          </Route>
          </Switch>
        </div>
      </header>
    </div>
    
    </BrowserRouter>
    
  );
}

export default App;
