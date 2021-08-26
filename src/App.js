import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Contador from './componentes/Contador';
import ItemDetalleContenedor from './componentes/itemDetailConteiner';
import ItemListContainer from './componentes/ItemListContainer';
import NavBar from './componentes/NavBar.js';
//context
import {CartContex} from './contex/cartContex';


function App() {


  return (
    <CartContex.Provider value={Contador} >
    <BrowserRouter>
      <div className="App" >
        <header className="App-header" style={{ color: 'black' }}>
          <div className="Container">
            <NavBar />
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
    </CartContex.Provider >
    
  );
}

export default App;
