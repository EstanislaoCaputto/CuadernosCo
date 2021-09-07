import { useContext, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Carrito from './componentes/CarroDeItems';
//import CartWidget from './componentes/CartWidget';
import ItemDetalleContenedor from './componentes/itemDetailConteiner';
import ItemListContainer from './componentes/ItemListContainer';
import NavBar from './componentes/NavBar.js';

//Firebase
// import { collection, getDocs } from 'firebase/firestore';
// import { getData } from './firebase';
// import { useEffect, useState } from 'react';

//context
import cartContex, { CartProvider } from './contex/cartContex';



function App() {




  return (
    <CartProvider>
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
              <Route exact path="/cart">
                <Carrito/>
              </Route>
            </Switch>
          </div>
        </header>
      </div>

    </BrowserRouter>
    </CartProvider >
    
  );
}

export default App;
