import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Carrito from './componentes/CarroDeItems';
import ItemDetalleContenedor from './componentes/itemDetailConteiner';
import ItemListContainer from './componentes/ItemListContainer';
import NavBar from './componentes/NavBar.js';
import Carrusel from './componentes/CarruselDeItems';
 

//Firebase
// import { collection, getDocs } from 'firebase/firestore';
// import { getData } from './firebase';
// import { useEffect, useState } from 'react';

//context
import { CartProvider } from './contex/cartContex';
import { UserProvider } from './contex/userContex';



function App() {




  return (
    <UserProvider>
      <CartProvider>
        <BrowserRouter>
          <div className="App" >
            <header className="App-header" style={{ color: 'black' }}>
              <div className="Container">
                <NavBar />
                <Switch>
                  <Route exact path="/cuadernosco">
                    <div className="row">
                      <Carrusel />
                      <ItemListContainer />
                    </div>
                  </Route>
                  <Route exact path="/detalles/:laReferencia">
                    <ItemDetalleContenedor />
                  </Route>
                  <Route exact path="/cart">
                    <Carrito />
                  </Route>
                  

                </Switch>
              </div>
            </header>
          </div>

        </BrowserRouter>
      </CartProvider >
    </UserProvider>

  );
}

export default App;
