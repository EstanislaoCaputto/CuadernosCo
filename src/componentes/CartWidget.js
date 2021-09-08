import React, { useState, useContext } from 'react';
import { render } from "@testing-library/react"
import { Button } from "react-bootstrap";
import Offcanvas from 'react-bootstrap/Offcanvas';
import Carrito from './CarroDeItems';
import cartContex from '../contex/cartContex';



function CartWidget() {
  const [show, setShow] = useState(false);
  const { unidad, carrito } = useContext(cartContex)
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  
  



  return (
    <>
      <Button variant="outline-warning" onClick={handleShow} className="btn btn-primary position-relative">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart-fill" viewBox="0 0 16 16">
          <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
        </svg>
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {unidad}
          <span class="visually-hidden">unread messages</span>
        </span>
      </Button>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Carrito de Compras</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Carrito />

        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}
render(<CartWidget />)
export default CartWidget

