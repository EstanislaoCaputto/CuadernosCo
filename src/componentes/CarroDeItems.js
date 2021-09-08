import { useContext } from 'react'
import React from 'react';
import  Cartcontext  from '../contex/cartContex'
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table'


export default function Carrito() {
    const { carrito, RemoveCart, RemoveItem } = useContext(Cartcontext);
    return (
        <>

            { carrito.length >= 1 ?

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
                              <tr>
                                <th> <h3>{item.titulo}</h3></th>
                                <th><h3>{item.precio}</h3></th>
                                <th><h3>{item.cantidad}</h3></th>
                                <th><h3>${item.subtotal} </h3></th>
                                <th><button className="btn btn-danger" onClick={()=>RemoveItem(item.titulo)} >Eliminar</button></th>
                              </tr>
                            )}
                        </tbody>
                    </Table>
                    <button className="btn btn-danger" onClick={() => RemoveCart()}>Cancelar compra</button>

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