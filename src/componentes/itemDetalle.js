import { useContext, useState } from "react";
import { Card } from "react-bootstrap";
import Contador from "./Contador";
import Cartcontext from "../contex/cartContex";
import { Link } from "react-router-dom";

function ItemDetalle({producto}) {
    const [ cantcomp, setCantComprar] = useState(0);
    const [ avtivado, setActivado] = useState(false);
    const {addItem} = useContext(Cartcontext);
    

    const onAdd=(Contar)=>{
        setCantComprar(Contar)
    }
    const AgregarCarrito=()=>{
        setActivado(true);
        addItem(producto, cantcomp)
    }

    return(
        <>
            
            <div className="container" style={{width:'350px'}}>
                <Card>
                    <Card.Img variant="top" src={producto.imagen} />
                    <Card.Body>
                        <Card.Title>
                            <h2>{producto.nombre}</h2>
                        </Card.Title>
                        <Card.Text>
                            <p>{producto.descripcion}</p>
                            <p>$ {producto.precio}</p>
                                                                       
                        </Card.Text>
                                               
                        {!avtivado ?
                        <>
                        <Contador inicial={producto.cantidad} stock={producto.stock} onAdd={onAdd}/>
                        <button className="btn btn-warning" onClick={AgregarCarrito}>Agregar al carro</button>
                        </>
                        :
                        <>
                        <Link className="btn btn-success" to="/cart">Terminar Compra</Link>
                        <Link className="btn btn-primary" to="/cuadernosco">Volver a Items</Link>
                        </>
                        }
                        
                    </Card.Body>
                </Card>
            </div>

        
        </>
    )
}

export default ItemDetalle