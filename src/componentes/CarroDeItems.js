import { useContext } from 'react'
import React from 'react';
import  Cartcontext  from '../contex/cartContex'
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table'
import { doc, setDoc, Timestamp } from "firebase/firestore";
import { getData } from '../firebase';

export default function Carrito() {
    const { carrito, RemoveCart, RemoveItem, FinDeCompra } = useContext(Cartcontext);

    
    return (
        <>

            { carrito.length > 0 ?

                <div>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Titulo</th>
                                <th>Precio</th>
                                <th>Cantidad</th>
                                <th>Subtotal</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                        {carrito.map((item)=>
                              <tr key={item.id}>
                                <th><h3>{item.nombre}</h3></th>
                                <th><h3>{item.precio}</h3></th>
                                <th><h3>{item.cantidad}</h3></th>
                                <th><h3>${item.subtotal} </h3></th>
                                <img className="btn btn-danger" onClick={()=>RemoveItem(item.nombre)} src="https://img.icons8.com/material-outlined/48/000000/trash--v2.png"/>
                              </tr>
                            )}
                        </tbody>
                    </Table>
                    <button className="btn btn-danger" onClick={() => RemoveCart()}>Cancelar compra</button>
                    <button className="btn btn-primary" onClick={() => FinDeCompra(carrito)}>Finalizar compra</button>

                </div>
                :
                <div >
                    <h4>Carrito Vacio</h4>
                    <Link className="btn btn-secundary" to="/"><button>Volver al Inicio</button></Link>
                </div>
            }
        </>
    )
}