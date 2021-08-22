import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import ItemDetalleContenedor from './componentes/ListaDeProductos/itemDetailConteiner';
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
          <Route exact path="/detalles/:laReferencia">
            <ItemDetalleContenedor />
          </Route>
          </Switch>
        </div>
      </header>
    </div>
    
    </BrowserRouter>
    
  );
}

export default App;
