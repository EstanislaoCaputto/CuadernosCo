import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import ItemDetalleContenedor from './componentes/itemDetailConteiner';
import ItemListContainer from './componentes/ItemListContainer';
import NavBar from './componentes/NavBar.js';


function App() {
  return (
    <BrowserRouter>
    <div className="App" >
      <header className="App-header" style={{color: 'black'}}>
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
