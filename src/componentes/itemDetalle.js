import { useContext, useState } from "react";
import { Card } from "react-bootstrap";
import Contador from "./Contador";
import cartContex from "../contex/cartContex";

function ItemDetalle(producto) {
    
    const [Compra, setCompra] = useState(0);
    const {carrito, setCarrito} = useContext(cartContex)
    
    const agregarCantAlCarrito = (cantidad) =>{
        setCompra(cantidad)
        setCarrito({...producto})
        console.log(carrito)
               
    }
    
    
    
    return(
        <>
            
            <div className="container" style={{width:'350px'}}>
                <Card>
                    <Card.Img variant="top" src={producto.imagen} />
                    <Card.Body>
                        <Card.Title>
                            <h2>{producto.titulo}</h2>
                        </Card.Title>
                        <Card.Text>
                            <p>{producto.descripcion}</p>
                            <p>$ {producto.precio}</p>
                                                                       
                        </Card.Text>
                        
                        <Contador inicial={producto.cantidad} stock={producto.stock} onAdd={agregarCantAlCarrito}/>
                        
                        
                    </Card.Body>
                </Card>
            </div>

        
        </>
    )
}

export default ItemDetalle