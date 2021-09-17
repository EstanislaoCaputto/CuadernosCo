import { useContext, useState } from 'react'
import React from 'react';
import  Cartcontext  from '../contex/cartContex'
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table'
import UserContex from '../contex/userContex';


export default function Carrito() {
    const [nombre, setNombre] = useState("")
    const { carrito, RemoveCart, RemoveItem, FinDeCompra } = useContext(Cartcontext);
    const {user, AgregarUsuario} = useContext(UserContex)

    
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
                        <button className="btn btn-primary" onClick={() => FinDeCompra(carrito, user)}>Finalizar compra</button>
                        :
                        <>

                            <label>Ingrese su nombre</label>
                            <input type="text" placeholder="Ingrese su nombre" onChange={(e)=>{setNombre(e.target.value)}}/>
                            <button className="btn btn-primary" onClick={() => AgregarUsuario(nombre)}> Agregar nombre </button>

                        </>
                    }

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