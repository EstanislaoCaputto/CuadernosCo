import { useContext, useState } from 'react'
import React from 'react';
import  Cartcontext  from '../contex/cartContex'
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table'
import UserContex from '../contex/userContex';
import { Button, Form } from 'react-bootstrap';


export default function Carrito() {
    const [nombre, setNombre] = useState("");
    const [numero, setNumero] = useState("");
    const [email, setEmail] = useState("");
    const { carrito, RemoveCart, RemoveItem, FinDeCompra } = useContext(Cartcontext);
    const {user, telefono, mail, AgregarUsuario} = useContext(UserContex)

    
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
                                <th className="sm-1"><h3>{item.cantidad}</h3></th>
                                <th><h3>${item.subtotal} </h3></th>
                                <img alt="borrarItem" className="btn btn-danger" onClick={()=>RemoveItem(item.id)} src="https://img.icons8.com/material-outlined/48/000000/trash--v2.png"/>
                              </tr>
                            )}
                        </tbody>
                    </Table>
                    <button className="btn btn-danger" onClick={() => RemoveCart()}>Cancelar compra</button>
                    {user ?
                        <button className="btn btn-primary" onClick={() => FinDeCompra(carrito, user, telefono, mail)}>Finalizar compra</button>
                        :
                        <>

                            <Form>
                                <Form.Group>
                                    <Form.Label>Nombre</Form.Label>
                                    <Form.Control onChange={(e) => { setNombre(e.target.value) }}></Form.Control>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Numero</Form.Label>
                                    <Form.Control onChange={(e) => { setNumero(e.target.value) }}></Form.Control>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Mail</Form.Label>
                                    <Form.Control onChange={(e) => { setEmail(e.target.value) }}></Form.Control>
                                    <Button style={{ margin: '5px' }} className="btn btn-primary" onClick={() => AgregarUsuario(nombre, numero, email)}> Agregar Usuario</Button>
                                </Form.Group>

                            </Form>
                        </>
                    }

                </div>
                :
                <div >
                    <h4>Carrito Vacio</h4>
                    <Link to="/"><button className="btn btn-info">Volver al Inicio</button></Link>
                </div>
            }
        </>
    )
}